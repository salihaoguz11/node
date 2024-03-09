"use strict";
/* -------------------------------------------------------
   BLOG API with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

// const nameSchema= new mongoose.Schema({fields},{tablo adi})
const nameSchema = new mongoose.Schema(
  {
    // _id://auto created and increment
    // fieldName: Type
    // fieldName: String,
    // fieldName2: Int,

    fieldName: {
      type: String,
      default: null,
      trim: true,
      unique: false,
    },
  },
  {}
);
