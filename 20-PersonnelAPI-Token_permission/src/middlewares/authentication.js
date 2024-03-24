"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(authentication):

const Token = require("../models/token.model");

module.exports = async (req, res, next) => {
  // Authorization: Token ...
  // Authorization: ApiKey ...
  // Authorization: X-API-KEY ...
  // Authorization: x-auth-token ...
  // Authorization: Bearer ...

  const auth = req.headers?.authorization || null; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    ); // personnel data ile birlestiriyoruz. Ve personnel verilerine ulasiyoruz.
    //userid datasini personel referansindan al.
    // console.log(tokenData)
    if (tokenData) req.user = tokenData.userId; // Personnel Data
    // console.log(req.user) // req.user 'a  tokenData.userId ata ve req.user basinda
    //req oldugu icin artik global oldu ve index.js dosyasinda da main path'ta onu kullandim.
  }
  next();
};
