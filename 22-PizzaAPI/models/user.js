"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// User Model:
const passwordEncrypt = require("../helpers/passwordEncrypt");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: type,
      // validate: [
      //     (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password),
      //     'Password type is not correct.'
      // ],
      // set: passwordEncrypt
      //* Mongoose da validate set metodundan sonra calisiyor.Ve validate de password sifreli geliyor.
      //* Yani 64 karakterli buyuk harf icermeyen bir password da validasyonu gecemiyor. O yuzden asagida ki
      //* yontemlerle validate islemlerini set metodu icinde yapiyoruz.
      //? Method 1
      set(password) {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
        ) {
          return passwordEncrypt(password);
        } else {
          throw new Error("Password type is not correct.");
        }
      },
      //? Method-2:
      // set: (password) => {
      //     if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
      //         return passwordEncrypt(password)
      //     } else {
      //         return 'wrong'
      //     }
      // },
      // validate: (password) => (password != 'wrong')
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("User", UserSchema);
