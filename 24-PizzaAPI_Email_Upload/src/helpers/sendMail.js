"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sendMail(to, subject, message):

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
  // Connect to MailServer:
  // const transporter = nodemailer.createTransport({
  //   // SMTP:
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // ssl, tls
  //   auth: {
  //     user: "yb3iukq2u3sfgsgk@ethereal.email",
  //     pass: "cYW1UAnBGdkUwCEYzA",
  //   },
  // });
  // console.log(transporter);

  // SendMail:
  // transporter.sendMail(
  //   {
  //     from: "yb3iukq2u3sfgsgk@ethereal.email", // from yazilmak zorunda degil.buraya baska mail adresi yazilirsa spama duser.
  //     to: "developersaliha@gmail.com", // 'a@b.com, c@d.com'
  //     subject: "Hello",
  //     text: "Hello There. How are you?",
  //     html: "<b>Hello There.</b> <p>How are you?</p>",
  //   },
  //   (error, success) => {
  //     success ? console.log("SUCCESS", success) : console.log("ERROR", error);
  //   }
  // );

  // //* GoogleMail (gmail)
  // //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "developersaliha@gmail.com",
      pass: "aiii wghm rcyy noxl",
    },
  });

  // //? YandexMail (yandex):
  // const transporter = nodemailer.createTransport({
  //     service: 'Yandex',
  //     auth: {
  //         user: 'username@yandex.com',
  //         pass: 'password' // your emailPassword
  //     }
  // })

  transporter.sendMail(
    {
      // from: 'developersaliha@gmail.com'
      to: to, //"developersaliha@gmail.com",
      subject: subject, // "Hello",
      text: message, // "Hello There. How are you?"
      html: message, //"<b>Hello There.</b> <p>How are you?</p>",
    },
    (error, success) => console.log(success, error)
  );
};
