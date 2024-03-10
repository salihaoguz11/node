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
        return data;
      }, //veriyi cagirirken caliscak function
      set: function (data) {
        return data;
      }, //veriyi kaydederken caliscak function
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
    //  createdAt, automatically created by mongoose
    //  updatedAt
  },
  {
    collection: "blogPost",
    timestamps: true,
  }
);

// mongoose.model('model ismi','hangi sema')
// const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

// module.exports = {
//   BlogPost: BlogPostModel,
// };

module.exports = {
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
