// Authors: Ivana Stančíková

var _ = require('underscore');

var Booth = function (_address, _grId, _G, _curve) {
    this._address = _address;
    this._groupId = _grId;
    this._G = _G;
    this._curve = _curve;

    this._cntVoters = undefined;
    this._faultyVotersCnt = undefined
    this._faultyVotersIdxs = [];

    this._votersAuthIdx = []; // idx in array of all voters (from all groups) held by authority

    this._blindedVotes = []; // blinded votes submitted by voters
    this._tally = [];

    if (this._cntVoters < 2 ){
        throw new Error("Minimum supported number of voters is 2.");
    }
    if( this._faulty_voters_cnt >= this._cntVoters){
      throw new Error("The number of faulty voters is bigger then the number of all voters.");
    }
}

Object.defineProperty(Booth.prototype, 'address', {
    get: function () {
      return this._address;
    }
})
Object.defineProperty(Booth.prototype, 'group', {
    get: function () {
      return this._groupId;
    }
})
Object.defineProperty(Booth.prototype, 'cntVoters', {
    get: function () {
      return this._cntVoters;
    }
})
Object.defineProperty(Booth.prototype, 'votersAuthIdx', {
    get: function () {
      return this._votersAuthIdx;
    }
})
Object.defineProperty(Booth.prototype, 'faultyVotersCnt', {
    get: function () {
      return this._faultyVotersCnt;
    }
})
Object.defineProperty(Booth.prototype, 'faultyVotersIdxs', {
    get: function () {
      return this._faultyVotersIdxs;
    }
})
Object.defineProperty(Booth.prototype, 'tally', {
    get: function () {
      return this._tally;
    }
})

Booth.prototype.sumOfBVotes = function(){
    var sum = this._G;
    for (let j = 0; j < this._blindedVotes.length; j++) {
      sum = this._curve.add(sum, this._blindedVotes[j]);
    }
    return sum;
}

Booth.prototype.setVotersCnt = function(cnt){
    this._cntVoters = cnt;
    for (let i = 0; i < cnt; i++){
        this._votersAuthIdx.push(0n);
    }
}

Booth.prototype.setFaulty = function(cnt){
    this._faultyVotersCnt = cnt;
    let idxs = _.sample(_.range(this.cntVoters), cnt);
    this._faultyVotersIdxs = _.sortBy(idxs, function (num) { return num; } )
}

module.exports = Booth;