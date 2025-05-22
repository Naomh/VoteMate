const accountSid = "AC87fd4f0bf69794023177f53d42797152";
const authToken = "b6bca66e845b57d832c35aaaf5f6ba07";
const client = require("twilio")(accountSid, authToken);

async function sendSMS() {
  try {
    client.messages.create({
      from: "+13203004512",
      to: "+420#########",
      body: "message",
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendSMS;
