const mongo = require("mongoose");

const accountSchema = new mongo.Schema({
      uid: {
        type: mongo.Schema.Types.ObjectId,
        default: new mongo.Types.ObjectId(),
      },
      email: {type: String, required: true, unique: true},
      name: String,
      authType: {type: String, enum:['oauth', 'email'], required: true},
      password: String,
      status: Boolean,
      verificationCode: String,      
    });

module.exports = new mongo.model("Accounts", accountSchema);