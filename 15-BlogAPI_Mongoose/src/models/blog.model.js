"use strict";
/* -------------------------------------------------------
   BLOG API with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");
/* -------------------------------------------------------
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
      unique: true,
      select: false, // model cagrildiginda gelsin mi?
      index: false, //aramalarda erisimi hizlandirir.
      required: true, // veri girisi gerekli mi?
      required: [true, "error message"], // gerekli mi?,hata mesaji
      enum: [[1, 2, 3], "error message"], // belirli bir pattern, bunun disinda girilirse hata verir.
      validate: [
        function (data) {
          return true;
        },
        "error message",
      ], // veriyi function ile dogrulama
      get: function (data) {
        return true;
      }, //veriyi cagirirken caliscak funcsion
      set: function (data) {
        return true;
      }, //veriyi kaydederken caliscak funcsion
    },
  },
  {
  collection:'collectionName',//tablo ismi 
  timestamps:true // create yapinca objenin kayit tarihini ve o obje uzerinde bir degisiklik yaptiginizda 
  //tarihi tutuyor.Otomatik olarak yapar.


  }
);
------------------------------------------------------- */

const blogPostSchema = new mongoose.Schema(
  {
    //categoryId
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "BlogPost",
    timestamps: true,
  }
);

// mongoose.model('model ismi','hangi sema')
const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

module.exports = {
  BlogPost: BlogPostModel,
};
