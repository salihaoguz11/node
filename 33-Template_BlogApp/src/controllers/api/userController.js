"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch async-errors and send to errorHandler:
require("express-async-errors");

const User = require("../../models/userModel");

// ------------------------------------------
// User
// ------------------------------------------
module.exports.User = {
  list: async (req, res) => {
    // const data = await User.find()
    // const data = await User.find(search).sort(sort).skip(skip).limit(limit).populate(populate)
    const data = await res.getModelList(User);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    // req.params.userId
    // const data = await User.findById(req.params.userId)
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    // const data = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }) // return new-data
    // const data = await User.updateOne({ _id: req.params.userId }, req.body)
    const data = await User.updateOne({ _id: req.params.userId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      body: req.body,
      result: data, // update infos
      newData: await User.findOne({ _id: req.params.userId }),
    });
  },

  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // const user = await User.findOne({ email: email, password: passwordEncrypt(password) })
      // No need passwordEncrypt, because using "set" in model:
      const user = await User.findOne({ email: email, password: password });
      if (user) {
        // Set Session:
        req.session = {
          user: {
            id: user.id,
            email: user.email,
            password: user.password,
          },
        };
        // Set Cookie:
        if (req.body?.rememberMe) {
          // Set Cookie maxAge:
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 Days
        }

        res.status(200).send({
          error: false,
          result: user,
          session: req.session,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password are required.");
    }
  },

  logout: async (req, res) => {
    // Set session to null:
    req.session = null;
    res.status(200).send({
      error: false,
      message: "Logout OK",
    });
  },
};
