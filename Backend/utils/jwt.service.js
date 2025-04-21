const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const publicKeyPath = path.join(__dirname, '../keys/jwtPubKey.pem');
const privateKeyPath = path.join(__dirname, '../keys/jwtPribKey.pem');

function loadKeyPair() {
  if (fs.existsSync(publicKeyPath) && fs.existsSync(privateKeyPath)) {
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
    return { publicKey, privateKey };
  } else {

    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
      }
    });

    fs.writeFileSync(publicKeyPath, publicKey);
    fs.writeFileSync(privateKeyPath, privateKey);

    return { publicKey, privateKey };
  }
}

class JWTService{

  constructor(){
    this.keyPair = loadKeyPair();
  }

  decode(token){
    console.log(token)
    return jwt.decode(token);
  }

  signJwt(object, options) {
    return jwt.sign(object, this.keyPair.privateKey, {
      ...(options && options),
      algorithm: "RS256",
    });
  }

  verifyJwt(token) {
      const decoded = jwt.verify(token, this.keyPair.publicKey);
      return {
        valid: true,
        expired: false,
        expirationDate: jwt.decode(token).exp * 1000,
        decoded,
      };
  }
}
module.exports = new JWTService();