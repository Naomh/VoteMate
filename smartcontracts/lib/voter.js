// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf), Ivana Stančíková

let W3 = require('web3');
const crypto = require('crypto');
let Utils = require("./utils.js");
const { type } = require('os');
const { threadId } = require('worker_threads');
var utils = new Utils()

var Voter = function (_G, _candidateGens, _candidates, _curve, _address, _deposit) {
    this._id = undefined;
    this._G = _G;
    this._curve = _curve;
    this._address = _address;
    this._deposit = _deposit;
    this._candidates = [..._candidates];
    this._candidateGens = utils.cloneArray(_candidateGens, false);

    this._group = undefined; // idx of group voter belongs to
    this._boothAddr = undefined; // addr of the booth of voter's group
    this._booth = undefined;

    this._sK = BigInt(utils.randomBytes(this._curve.n))
    this._pK = this._curve.multiply(this._G, this._sK);

    this._vote = undefined;
    this._bvote = undefined;
    this._mpcKey = undefined;

    this._isFaulty = false;

    this._sizeP = 32;

    this._a = [];
    this._b = [];
    this._r = [];
    this._d = [];
    this._c = undefined;
}

Object.defineProperty(Voter.prototype, 'id', {
    get: function () {
      return this._id;
    }
})
Object.defineProperty(Voter.prototype, 'group', {
    get: function () {
      return this._group;
    }
})
Object.defineProperty(Voter.prototype, 'boothAddr', {
    get: function () {
      return this._boothAddr;
    }
})
Object.defineProperty(Voter.prototype, 'booth', {
    get: function () {
      return this._booth;
    }
})
Object.defineProperty(Voter.prototype, 'address', {
    get: function () {
      return this._address;
    }
})
Object.defineProperty(Voter.prototype, 'pK', {
    get: function () {
      return this._pK;
    }
})
Object.defineProperty(Voter.prototype, 'pK_pair', {
    get: function () {
      return ["0x" + this._pK.x.toString(16), "0x" + this._pK.y.toString(16)];
    }
})
Object.defineProperty(Voter.prototype, 'mpcKey', {
    get: function () {
      return this._mpcKey;
    }
})
Object.defineProperty(Voter.prototype, 'sK', {
    get: function () {
      return this._sK;
    }
})
Object.defineProperty(Voter.prototype, 'vote', {
    get: function () {
      return this._vote;
    }
})
Object.defineProperty(Voter.prototype, 'bvote', {
    get: function () {
      return this._bvote;
    }
})
Object.defineProperty(Voter.prototype, 'isFaulty', {
    get: function () {
      return this._isFaulty;
    }
})
Object.defineProperty(Voter.prototype, 'sizeP', {
    get: function () {
      return this._sizeP;
    }
})

Voter.prototype.computeMpcPK = function(ephemeralPKs){

    var sum_left = this._G;
    for (let j = 0; j < this._id; j++) {
      sum_left = this._curve.add(sum_left, ephemeralPKs[j]);
    }
  
    var sum_right = this._G;
    for (let j = this._id + 1; j < ephemeralPKs.length; j++) {
      sum_right = this._curve.add(sum_right, ephemeralPKs[j]);
    }

    this._mpcKey = this._curve.subtract(sum_left, sum_right);
    //console.log(`\t The voter[${this._id}] computed his MPC PK  (i.e. h) =  ${this._mpcKey}`);
  }

Voter.prototype.getBlindedVote = function() {
    //console.log(`\t getBlindedVote for voter[${this._id}], h = ${this._mpcKey} | x = ${this._sK}`);
    this._vote = Math.floor(Math.random() * this._candidates.length);

    this._bvote = this._curve.add(this._curve.multiply(this._mpcKey, this._sK), this._candidateGens[this._vote]);
    //console.log(`\t The voter[${this._id}] votes for candidate ${this._vote} | bvote = ${this._bvote}`)

    // correctness proof
    let w = BigInt(utils.randomBytes(this._curve.n));

    for (let i = 0; i < this._candidates.length; i++) {
        console.log(`\t Processing candidate[${i}]...`)
        if(i != this._vote){
            var r =  BigInt(utils.randomBytes(this._curve.n));
            var d = BigInt(utils.randomBytes(this._curve.n));

            var a = this._curve.subtract(
              this._curve.multiply(this._G, r),
              this._curve.multiply(this._pK, d)
            )
            b = this._curve.subtract(
              this._curve.add(
                this._curve.multiply(this._mpcKey, r),
                this._curve.multiply(this._candidateGens[i], d)
              ),
              this._curve.multiply(this._bvote, d)
            )
        } else{
            var a = this._curve.multiply(this._G, w);
            var b = this._curve.multiply(this._mpcKey, w);
            var r = undefined;
            var d = 0n;
        }
        this._a.push(a);
        this._b.push(b);
        this._r.push(r);
        this._d.push(d);
    }

    let inputForHash = [];
    this._a.forEach(e => {
        inputForHash.push(utils.toPaddedHex(e.x.toString(16), 32));
        inputForHash.push(utils.toPaddedHex(e.y.toString(16), 32));
    });

    this._b.forEach(e => {
        inputForHash.push(utils.toPaddedHex(e.x.toString(16), 32));
        inputForHash.push(utils.toPaddedHex(e.y.toString(16), 32));
    });

    this._c = W3.utils.toBN(utils.shaX(inputForHash, this._sizeP));

    // adjust d, r for selected candidate
    let tmpXor = utils.xorBIArray(this._d, 32);
    this._d[this._vote] = BigInt(utils.xor(utils.toPaddedHex(this._c, 32), tmpXor));
    this._r[this._vote] = (this._sK * this._d[this._vote] + w) % this._curve.n;

    console.log('----------------------------------------------');
    console.log(utils.ECPointsArrayToHex(this._a, this._sizeP));
    console.log('----------------------------------------------');

    return [
        utils.BIarrayToHex(this._d, this._sizeP),
        utils.ECPointsArrayToHex(this._a, this._sizeP),
        utils.ECPointsArrayToHex(this._b, this._sizeP),
        utils.BIarrayToHex(this._r, this._sizeP), // here will be stored decomposed scalars of r
        [], // here will be stored decomposed scalars of d
        [utils.toPaddedHex(this._bvote.x, 32), utils.toPaddedHex(this._bvote.y, 32)],
    ];
}

Voter.prototype.computeBlindKeyForVoter = function(faultyPK){
    var res = this._curve.multiply(faultyPK, this._sK);
    return [utils.toPaddedHex(res.x, 32), utils.toPaddedHex(res.y, 32)];
}

Voter.prototype.computeZKproofs4FT = function(nonVotingIDXes, voters) {

    var proof_r = [];
    var proof_m1 = [];
    var proof_m2 = [];
    var hashes = [];
  
    for (let i = 0; i < nonVotingIDXes.length; i++) {
      const l = nonVotingIDXes[i]; // index within group
      const f = this.booth.votersAuthIdx[l]; // index within all voters
  
      const B = voters[f].pK;
      const w = BigInt(utils.randomBytes(this._curve.n)); // sample random number
      const m1 = this._curve.multiply(this._G, w);
      const m2 = this._curve.multiply(B, w);
      proof_m1.push(m1);
      proof_m2.push(m2);
  
      let inputForHash = [];
      inputForHash.push(utils.toPaddedHex(this.pK.x.toString(16), 32), utils.toPaddedHex(this.pK.y.toString(16), 32));
      inputForHash.push(utils.toPaddedHex(B.x.toString(16), 32), utils.toPaddedHex(B.y.toString(16), 32));
      inputForHash.push(utils.toPaddedHex(m1.x.toString(16), 32), utils.toPaddedHex(m1.y.toString(16), 32));
      inputForHash.push(utils.toPaddedHex(m2.x.toString(16), 32), utils.toPaddedHex(m2.y.toString(16), 32));
      let c = W3.utils.toBN(utils.shaX(inputForHash, this._sizeP));
      hashes.push(BigInt(c));
      //console.log(`\t\t h(A, B, m1, m2) = ${c.toString(16)} | type = `, typeof(c));
  
      let cx = (this.sK * BigInt(c)) % this._curve.n;
      let r = (cx + w) % this._curve.n;
      proof_r.push(r);
    }
  
    return [
        utils.BIarrayToHex(proof_r, this._sizeP), // this will replaced by decomposed scalars
        utils.BIarrayToHex(hashes, this._sizeP), // this will be replaced by decomposed scalars
        utils.ECPointsArrayToHex(proof_m1, this._sizeP),
        utils.ECPointsArrayToHex(proof_m2, this._sizeP),
    ];
}

Voter.prototype.repairBlindedVote = function(nonVotingIDXes, voters) {

    // subtract or add blinding key G x_i x_j to the current blinding vote
    for (let i = 0; i < nonVotingIDXes.length; i++) {
      const l = nonVotingIDXes[i];
      const f = this.booth.votersAuthIdx[l];
      var blindingKey = this._curve.multiply(voters[f].pK, this.sK);
      if(l < this.id){
        this._bvote = this._curve.subtract(this._bvote, blindingKey);
      }else{
        this._bvote = this._curve.add(this._bvote, blindingKey);
      }
    }
    return this._bvote;
}

module.exports = Voter;