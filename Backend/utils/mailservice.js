const { createTransport } = require("nodemailer");
const config = require("./email.conf.json");
const appConf = require("../config.json");

class mailer {
  constructor() {
    this.transporter = createTransport(config.transport);
  }

  sendVerificationEmail(name, email, verificationCode) {
    const link = `${appConf.host}/verify?code=${verificationCode}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: 'VoteMate - Verify Your Email Address',
      textEncoding: 'utf-8',
      html: `<p>Dear ${name},</p>
      <p>Thank you for signing up with <strong>VoteMate</strong>! To complete your registration, please verify your email address by clicking the link below:</p>
      <a href="${link}" style="margin:20px; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none;">Verify Email</a>
      <p>If the button doesn’t work, copy and paste the following link into your browser:</p>
      <p><a href="${link}">${link}</a></p>
      <p>If you did not create an account, please ignore this email.</p>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendResetPwEmail(email, resetCode) {
    const link = `${appConf.url}/reset?code=${resetCode}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: 'VoteMate - Password Reset Request',
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>We received a request to reset your password. Use the code below to reset your password:</p>
      <p><strong>${resetCode}</strong></p>
      <p>The code will expire in 30 minutes. If you did not request a password reset, please ignore this email.</p>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendSignUpNotification(email, electionName, electionID, votingStarts) {
    const link = `${appConf.url}/election/${electionID}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: `VoteMate - Signup Phase Has Started`,
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>The signup phase for <strong>${electionName}</strong> has officially started. Confirm your participation by signing up through the link below:</p>
      <a href="${link}">Sign Up Now</a>
      <p>Signup closes on: <strong>${new Date(votingStarts).toDateString()}</strong>.</p>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendNewElectionNotification(email, electionName, electionID, registrationClose) {
    const link = `${appConf.url}/election/${electionID}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: `VoteMate - Registration Phase Has Started`,
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>The registration phase for <strong>${electionName}</strong> has started. Register now to participate in the election:</p>
      <a href="${link}">Register Now</a>
      <p>Registration closes on: <strong>${new Date(registrationClose).toDateString()}</strong>.</p>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendVotingNotification(email, electionName, electionID, votingEnds) {
    const link = `${appConf.url}/election/${electionID}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: `VoteMate - Voting Phase for Has Started`,
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>The voting phase for <strong>${electionName}</strong> has started. Cast your vote now through the link below:</p>
      <a href="${link}">Vote Now</a>
      <p>Voting closes on: <strong>${new Date(votingEnds).toDateString()}</strong>.</p>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendFaultRepairNotification(email, electionName, electionID) {
    const link = `${appConf.url}/election/${electionID}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: `VoteMate - Fault Repair Phase Has Started`,
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>The fault repair phase for <strong>${electionName}</strong> has started. Please review and address any issues through the link below:</p>
      <a href="${link}">Review Issues</a>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }

  sendTallyNotification(email, electionName, electionID) {
    const link = `${appConf.url}/election/${electionID}`;
    this.transporter.sendMail({
      from: config.senderEmail,
      to: email,
      subject: `VoteMate - Tally Phase Has Started`,
      textEncoding: 'utf-8',
      html: `<p>Dear user,</p>
      <p>The tally phase for <strong>${electionName}</strong> has started. You can view the results through the link below:</p>
      <a href="${link}">View Results</a>
      <p>Best regards,<br>The VoteMate Team</p>`
    }, function (e) {
      if (e) {
        console.log('Unable to send the email: ' + e);
      } else {
        console.log('Email sent');
      }
    });
  }
}

module.exports = new mailer();
