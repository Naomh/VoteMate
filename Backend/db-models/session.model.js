const mongo = require("mongoose");

const sessionSchema = new mongo.Schema({
      uid: { type: mongo.Schema.Types.ObjectId, ref: 'Accounts', required: true },
      refreshToken: { type: String, required: true },
      userAgent: { type: String },
      ipAddress: { type: String },
      expiresAt: { type: Date, required: true },
      createdAt: { type: Date, default: Date.now },
      revokedAt: { type: Date }
    });

module.exports = new mongo.model("Sessions", sessionSchema);