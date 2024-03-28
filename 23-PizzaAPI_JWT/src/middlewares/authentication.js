"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']

  if (tokenKey) {
    if (tokenKey[0] == "Token") {
      // SimpleToken

      const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
        "userId"
      );
      req.user = tokenData ? tokenData.userId : false;
    } else if (tokenKey[0] == "Bearer") {
      // JWT AccessToken:

      // jwt.verify(accessToken, access_key, callbackFunction())
      //JWT token  okumak icin verify kullaniyoruz.
      jwt.verify(
        tokenKey[1],
        process.env.ACCESS_KEY,
        function (error, accessData) {
          // if (accessData) {   // burada JWT ile gonderdigim user datalar var
          //     console.log('JWT Verify: YES')
          //     req.user = accessData
          // } else {
          //     console.log('JWT Verify: NO')
          //     console.log(error)
          //     req.user = false
          // }
          req.user = accessData ? accessData : false; // req.user'a atama yapiyoruz.
        }
      );
    }
  }
  next();
};
