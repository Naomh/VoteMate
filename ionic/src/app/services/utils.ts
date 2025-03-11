import BN from 'bn.js'
import Web3 from 'web3';

const w3 = new Web3();

export function randomBytes(mod: BN) {
    let res = window.crypto.getRandomValues(new Uint8Array(32));
    let resBn = new BN(res, 'hex');
    while (resBn.gte(mod)) {
        resBn = resBn.shrn(1);
    }
    return resBn;
}

export function shaX(input: any[] | string, newSizeB:number): string{
    const stdHashSize = 32;
    if(stdHashSize >= newSizeB){
        const hash = Array.isArray(input) ? w3.utils.soliditySha3(...input): w3.utils.soliditySha3(input);
        if(!hash){
            throw new Error('Hash computation failed');
        }
        return hash.substring(2, 2 + 2 * newSizeB);
    }else{
        throw new Error('Not Implemented');
    }
}

export function xorBNArray( arr: BN[], paddingBytes: number):string{
    if(arr.length < 2){
        throw new Error('xorArray() supports only arrays (of length 2+)')
    }
    let hexArray = arr.map(item => {
       let hex = item.toString('hex', 64)
       if(hex.length > paddingBytes*2){
            throw new Error(`Length of element ${hex} is longer than padding in Bytes ${paddingBytes}`);
       }
       return hex;
    })

    let result: string = hexArray.shift() ?? "";
    for(const item of hexArray){
        result = xor(result, item);
    }
    return result.padStart(paddingBytes*2, '0');
}

export function xor(a:string, b:string){
    if((a.length % 2) || (b.length % 2)){
        throw new Error("XOR supports only arguments of even length.");
    }

    let a_hex = hexToBytes(a);
    let b_hex = hexToBytes(b);
    
    if(a_hex.length !== b_hex.length){
        throw new Error("XOR supports only equally-long arguments.");
    }
    
    let result = [];
    for(let i = 0; i < a_hex.length; i++){
        result.push(a_hex[i] ^ b_hex[i]);
    }
    return bytesToHex(result);
}

export function hexToBytes(a:string){
    return new Uint8Array(a.match(/[0-9a-f]{2}/gi)!.map(byte => parseInt(byte, 16)))
}

export function bytesToHex(a: number[]){
   let hex = []
   for(let i = 0; i < a.length; i++){
    hex.push((a[i] >>> 4).toString(16))
    hex.push((a[i] &0xF).toString(16))
   }
   return hex.join('');
}

export function BIarrayToHexUnaligned(arr: BigInt[]) {

    if(!Array.isArray(arr)){
    throw new Error('inputed variable is not an array')
    }
        let ret: string[] = [];
        arr.forEach(e => {
            ret.push(Web3.utils.numberToHex(e.toString(10)));
        });
    return ret;
}
