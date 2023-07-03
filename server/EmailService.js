// emailService.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Update with the appropriate SMTP host for the email service provider
  port: 465, // Update with the appropriate SMTP port
  secure: true, // Use SSL/TLS
  auth: {
    user: 'aizakkusan2003@gmail.com', // Update with your email address
    pass: 'wrjcusxhonjggtzt' // Update with your email password
  }
});

const sendEmail =  (to, subject, html) => {
  const mailOptions = {
    from: 'aizakkusan2003@gmail.com',
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions)
};

module.exports = {
  sendEmail
};
