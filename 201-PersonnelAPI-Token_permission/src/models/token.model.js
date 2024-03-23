"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
}
/* ------------------------------------------------------- */

// Token Model:

const TokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Personnel", // 'User'
      required: true,
      index: true,
      unique: true,
    },
    token: {
      type: String,
      trim: true,
      required: true,
      index: true, //onemli olanlar veriler. Surekli kullanilan veriler
      // bellekte kolay ulasilabilecek bir yere yerlestirilir.
      //Index true dersem eger bellkte kolay ulasilabilecek yere yerlestirilir
      //ve tokena ihtiyacim olunca hizlica ulasilabilir.
      unique: true,
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  }
);
/* ------------------------------------------------------- */
module.exports = mongoose.model("Token", TokenSchema);
