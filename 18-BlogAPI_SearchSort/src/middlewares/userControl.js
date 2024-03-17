"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */
// Burada session daki verilerin dogrularini kontrol eden bir middleware yazdik.
// Session da kullanici versi var mi?
//Eger sifremi silersem yada degistirirsem session'i siler.

const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  if (req?.session?.id) {
    const { id, password } = req.session;

    const user = await User.findOne({ _id: id });
    //db de ki id ile girilen id 'yi kontrol eder
    if (user && user.password == password) {
      req.user = user;
      req.isLogin = true;
    } else {
      req.session = null;
      req.isLogin = false;
    }
  }
  next();
};
