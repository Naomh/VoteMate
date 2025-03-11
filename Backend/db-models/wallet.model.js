const mongo = require("mongoose");

const walletSchema = new mongo.Schema({
  address: String,
});

module.exports = new mongo.model("Wallet", walletSchema);