const { createTransport } = require("nodemailer");
const config = require("./email.conf.json");

class mailer {
  constructor() {
    this.transporter = createTransport(config.transport);
  }
  sendVerificationEmail(name, email, verificationCode){
    const link = 'localhost:3000/verify?code='
    this.transporter.sendMail({ 
      from: config.senderEmail,
      to: email,
      subject: 'VoteMate - account verification',
      html: `<p>Dear ${name},</p>
      <p>Thank you for signing up with <strong>VoteMate</strong>! To complete your registration, we just need to verify your email address.</p>
      <p>Please click the link below to confirm your email:</p>
      <br>
      <a href="${link}${verificationCode}" style="margin:20px; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none;">Confirm Email</a>
      <br>
      <p>If the button doesn’t work, copy and paste the following link into your browser:</p>
      <p><a href="${link}${verificationCode}">${link}${verificationCode}</a></p>
      <p>If you did not create an account with us, you can safely ignore this email.</p>
      <p>Thank you,<br>The Your Company Name Team</p>
      `
   },function(e){
      if(e){
          console.log('unable to send the email: ' + e)
      }else{
          console.log('email sent');
      }
   });
  }
  notifyVoter(name, email) {
    this.transporter.sendMail({ 
        from: config.senderEmail,
        to: email,
        subject: 'SBVote notifikace',
        text: `Vážený uživateli - ${name},\n úspěšně jste se přihlásil do aplikace SBvote`,
        textEncoding: 'utf-8' 
     },function(e){
        if(e){
            console.log('unable to send the email: ' + e)
        }else{
            console.log('email sent');
        }
     });
  }
}

module.exports = new mailer();
