let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config();
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nicoleeneji@gmail.com',
    pass: process.env.PASS
  }
});

let mailOptions = {
  from: 'nicoleeneji@gmail.com',
  to: 'smartjusticecj14@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy. I hope you have a nice day!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});