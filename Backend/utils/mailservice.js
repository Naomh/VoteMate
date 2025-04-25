const { createTransport } = require("nodemailer");
const config = require("./email.conf.json");
const appConf = require("../config.json");

class mailer {
  constructor() {
    this.transporter = createTransport(config.transport);
  }
  sendVerificationEmail(name, email, verificationCode){
    const link = `${appConf.host}/verify?code=${verificationCode}`
    this.transporter.sendMail({ 
      from: config.senderEmail,
      to: email,
      subject: 'VoteMate - account verification',
      textEncoding: 'utf-8',
      html: `<p>Dear ${name},</p>
      <p>Thank you for signing up with <strong>VoteMate</strong>! To complete your registration, we just need to verify your email address.</p>
      <p>Please click the link below to confirm your email:</p>
      <br>
      <a href="${link}" style="margin:20px; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none;">Confirm Email</a>
      <br>
      <p>If the button doesn’t work, copy and paste the following link into your browser:</p>
      <p><a href="${link}">${link}</a></p>
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
 
  sendResetPwEmail(email, resetCode){
    const link = `${appConf.url}/reset?code=${resetCode}`
    this.transporter.sendMail({ 
      from: config.senderEmail,
      to: email,
      subject: 'VoteMate - reset password ',
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      We received a request to reset your password. If you made this request, please click the link below to reset your password:
      Reset Password
      Submit this code ${resetCode}. The code will expire in 30 minutes. If you did not request a password reset, you can safely ignore this email.
      If you have any questions, feel free to contact our support team.
      Best regards,
      VoteMate
      `
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
