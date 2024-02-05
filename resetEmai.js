// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
import express from "express"
import * as dotenv from "dotenv"

dotenv.config()
const pass=process.env.Pass
let sendmail =async (receiver, text, html, subject) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jeyachandranjcs@gmail.com",
      pass: pass,
    },
  });


  let mailOption = {
    from: "jeyachandranjcs@gmail.com",
    to: receiver,
    subject: subject,
    text: text,
    html: html,
  };
  
  
  transport.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
   return error.message;

    } else {
      console.log("Email sent: " + info.response);
      return info.response;
    }
  });
};

// sendmail("tonyjeyatj@gmail.com","hello","<h1>hello</h1>","hello")

export default sendmail