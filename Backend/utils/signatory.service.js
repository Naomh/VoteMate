const fs = require('fs');
const forge = require('node-forge');

const privateKeyPass = 'dd28606c184273d5c1cf4500da13b852e6c48b1af58a9dcd193e0f3ca5caef22'
const privateKeyPem = fs.readFileSync('./keys/private_key.pem', 'utf8');
const privateKey = forge.pki.decryptRsaPrivateKey(privateKeyPem, privateKeyPass);

const publicKeyPem = fs.readFileSync('./keys/public_key.pem', 'utf8');
const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

class SignatoryService{

    sign(item){
        const dataToSignString = JSON.stringify(item);
        const md = forge.md.sha256.create();
        md.update(dataToSignString, 'utf8');
        const signature = privateKey.sign(md);
        return forge.util.bytesToHex(signature);
    }

    isValid(item, signature){
        const originalDataString = JSON.stringify(item);
        const signatureBytes = forge.util.hexToBytes(signature);
        const md = forge.md.sha256.create();
        md.update(originalDataString, 'utf8');
        return publicKey.verify(md.digest().getBytes(), signatureBytes);
    }
}

const signatoryService = new SignatoryService()

module.exports = signatoryService;