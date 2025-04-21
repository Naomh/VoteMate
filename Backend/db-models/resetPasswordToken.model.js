const mongo = require("mongoose");

const resetPWSchema = new mongo.Schema({
      uid: { type: mongo.Schema.Types.ObjectId, ref: 'Accounts', required: true },
      resetToken: { type: String, required: true },
      expiresAt: { type: Date, default: () => (Date.now() + 6e4)},
      createdAt: { type: Date, default: Date.now },
    });

module.exports = new mongo.model("resetPW", resetPWSchema);