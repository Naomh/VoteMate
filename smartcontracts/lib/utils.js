
// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf)

const crypto = require('crypto');
let W3 = require('web3');

class Utils {
    constructor() {}

    // Convert a hex string to a byte array
    hexToBytes = function(hex) {
        let bytes = [];
        for (let c = 2; c < hex.length; c += 2)
            bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
    }

    // Convert a byte array to a hex string
    bytesToHex = function(bytes) {
        let hex = [];
        for (let i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
        }
        return "0x" + hex.join("");
    }

   randomBytes = function(mod) {
        let res = crypto.randomBytes(32);
        while (res >= mod) {
            res /= 2;
        }
        return "0x" + res.toString('hex');
    }

    toPaddedHex = function (item, paddingBytes){
        let pi = W3.utils.padLeft(item, paddingBytes * 2);
        return pi;
    }

    shaX = function(a, newSizeB) {
        let stdHashSizeB = 32; // 32B is the output size of sha256()

        if(stdHashSizeB >= newSizeB){
            if (Array.isArray(a)){
                return W3.utils.soliditySha3(...a).substring(0, 2 + 2 * newSizeB);
            }
            return W3.utils.soliditySha3(a).substring(0, 2 + 2 * newSizeB);
        }else {
            // if modulus is bigger, we also need to accomodate the size of hash
            throw Error("Not Implemented");
        }
    }

    xorBIArray = function(arr, paddingBytes) {
        if (!Array.isArray(arr) || arr.length < 2) {
            throw new Error("xorArray() supports only arrays (of length 2+)");
        }
        let hexArray = this.BIarrayToHex(arr, paddingBytes);

        let res = hexArray[0];
        for (let i = 1; i < hexArray.length; i++) {
            res = this.xor(res, hexArray[i]);
        }
        return res;
    }

    xor = function(_a, _b) {
        let a = _a;
        let b = _b;
        if (typeof(a) != 'string' || typeof(b) != 'string' || a.substr(0, 2) != '0x' || b.substr(0, 2) != '0x') {
            throw new Error("XOR supports only hex string arguments");
        }
        if(a.length % 2 != 0 || b.length % 2 != 0){
            console.log(`\t a = ${a} | b = ${b}`);
            throw new Error("XOR supports only arguments of even length.");
        }

        a = this.hexToBytes(a);
        b = this.hexToBytes(b);
        var res = []
        if (a.length != b.length ) {
            console.log(`\t a = ${a} | b = ${b}`);
            throw new Error("XOR supports only equally-long arguments.");
       } else {
            for (var i = 0; i < a.length; i++) {
                res.push(a[i] ^ b[i])
            }
       }
       return this.bytesToHex(res);
    }

    BIarrayToHex = function (arr, paddingBytes) {

        assert(Array.isArray(arr));
        let ret = [];
        arr.forEach(e => {
            assert(typeof e == "bigint");
            if (e.toString(16).length - 2 > paddingBytes * 2) {
                throw new Error(`Length of element ${e.toString(16)} is longer than padding in Bytes ${paddingBytes}`);
            }
            // console.log("BIarrayToHex element = ", e.toString(16));
            ret.push(this.toPaddedHex(e.toString(16), paddingBytes));
        });
        return ret;
    }

    ECPointsArrayToHex = function (arr, paddingBytes) {
        var ret = [];
        arr.forEach(e => {
            ret.push(this.toPaddedHex(e.x, paddingBytes));
            ret.push(this.toPaddedHex(e.y, paddingBytes));
        });
        return ret;
    }

    computeExpofPowerOf2GreaterThanArg = function(n) {
        var ret = 1;

        while(Math.pow(2, ret) < n){
            ret += 1;
        }
        return ret; // 2^ret > m
    }

    BIarrayToHexUnaligned = function (arr) {

        assert(Array.isArray(arr));
        let ret = [];
        arr.forEach(e => {
            ret.push(web3.utils.numberToHex(e.toString(10)));
        });
        return ret;
    }

    cloneArray = function(arr, convertToBigInt = false) {
        let ret = []
        for (let i = 0; i < arr.length; i++) {
            if(convertToBigInt){
                ret.push(BigInt(arr[i]));
            }else{
                ret.push(arr[i]);
            }
        }
        return ret
    }

}

module.exports = Utils;