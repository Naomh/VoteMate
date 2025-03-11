// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf)

const ec = require('simple-js-ec-math');
let Utils = require("./utils.js");
var utils = new Utils()

function h(a) { return W3.utils.soliditySha3({v: a, t: "bytes", encoding: 'hex' }); }

var Authority = function (_cnt_candidates, _cnt_voters, _Gx, _Gy, _PP, _NN, _votingGroupsCnt, _faulty_voters_cnt) {
    this._cntVoters = _cnt_voters;
    this._candidates = this.getCandNames(_cnt_candidates);
    this._votingGroupsCnt = _votingGroupsCnt;
    this._G = new ec.ModPoint(BigInt(_Gx), BigInt(_Gy));
    this._PP = BigInt(_PP);
    this._NN = BigInt(_NN);
    this._curve = new ec.Curve(0n, 7n, this._NN , this._PP, this._G);
    this._candidateGens = this.initCandGenerators(_cnt_candidates);
    this._faultyCnt = _faulty_voters_cnt;

    if (this._cntVoters < 2 ){
        throw new Error("Minimum supported number of voters is 2.");
    }
    if( this._faulty_voters_cnt >= this._cntVoters){
      throw new Error("The number of faulty voters is bigger then the number of all voters.");
    }
}

Object.defineProperty(Authority.prototype, 'candidates', {
    get: function () {
        return this._candidates;
    }
})
Object.defineProperty(Authority.prototype, 'curve', {
    get: function () {
      return this._curve;
    }
})
Object.defineProperty(Authority.prototype, 'candidateGens_p', {
    get: function () {
      return this._candidateGens;
    }
})
Object.defineProperty(Authority.prototype, 'candidateGens', {
    get: function () {
        gens = [];
        this._candidateGens.forEach(f => {
            gens.push("0x" + f.x.toString(16));
            gens.push("0x" + f.y.toString(16));
        });
        return gens;
    }
})
Object.defineProperty(Authority.prototype, 'cntVoters', {
    get: function () {
        return this._cntVoters;
    }
})
Object.defineProperty(Authority.prototype, 'faultyCnt', {
    get: function () {
        return this._faultyCnt;
    }
})
Object.defineProperty(Authority.prototype, 'votingGroupsCnt', {
    get: function () {
        return this._votingGroupsCnt;
    }
})
Object.defineProperty(Authority.prototype, 'G', {
    get: function () {
      return this._G;
    }
})

Authority.prototype.getCandNames = function(_cnt_candidates){
    let ret = [];

    for (let i = 0; i < _cnt_candidates; i++) {
        ret.push("Candidate with ID = " + i.toString());
    }
    
    return ret;
}
Authority.prototype.getVoterAddrs = function(accounts){
    var ret = [];
    // start from 1, since accounts[0] is authority
    for (let i = 1; i < this.cntVoters + 1; i++) {
        ret.push(accounts[i]);
    }
    return ret;
}
Authority.prototype.initCandGenerators = function(cnt_candidates){
    let ret = [];
  
    // according Hao et al. page 3
    const m = utils.computeExpofPowerOf2GreaterThanArg(this._cntVoters); // 2^m > |voters|  ; Baudron et al.
    
    for (let i = 0; i < cnt_candidates; i++) {
        var v_i = Math.pow(2, m * i);
        var Fx = this._curve.multiply(this._G, BigInt(v_i));   
        ret.push(Fx);
    }
    //console.log("Initializing cand generators", ret)
    return ret;
}

Authority.prototype.expCandGens = function(tally){
    assert(tally.length == this._candidateGens.length);
  
    var sum = this._G;
    var prod;
  
    for (let j = 0; j < this._candidateGens.length; j++) {
      if(tally[j] != 0n){
        prod = this._curve.multiply(this._candidateGens[j], tally[j]);
        sum = this._curve.add(sum, prod);
      }
    }
    return sum;
}

module.exports = Authority;