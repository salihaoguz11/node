"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

require("express-async-errors");

const passwordEncrypt = require("../helpers/passwordEncrypt");
const User = require("../models/user.model");

module.exports = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);
    const newdata = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsan tekrar çağır
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    // console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },

  // Login/Logout:

  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // const user = await User.findOne({ email: email })
      const user = await User.findOne({ email });

      if (user && user.password == passwordEncrypt(password)) {
        // user.password db'de ki sifre ile sifreli kullanici sifresi ayni mi diye bakar.
        // Buraya direk password yazamayiz, cunku o direk sifresiz olarak bulunur.

        /* SESSION */
        // req.session = {
        //     email: user.email,
        //     password: user.password
        // }
        // req.session.email = user.email
        req.session.id = user.id;
        req.session.password = user.password;
        // Yukarida ki hersey dogruysa Cookies'e kayit ederiz.
        /* SESSION */

        /* COOKIE */
        if (req.body?.remindMe) {
          req.session.remindMe = req.body.remindMe;
          // SET maxAge:
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 days
          // remind me secerse user, 3 gun boyunca veriler  kayitli olsun
        }
        /* COOKIE */
        res.status(200).send({
          error: false,
          message: "Login OK",
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters not valid");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required.");
    }
  },
  logout: async (req, res) => {
    // Session destroy:
    req.session = null;
    res.status(200).send({
      error: false,
      massage: "Logout OK",
    });
  },
};
