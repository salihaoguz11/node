"use strict";
/* -------------------------------------------------------
   BLOG API with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

//BLOG CATEGORY:
const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategory",
    timestamps: true,
  }
);

/* -------------------------------------------------------*
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
    blogCategoryId: {
      //js de object Id diye bir data type yok O yuzden mongoose un kendisinden faydalaniyoruz.

      type: mongoose.Schema.Types.ObjectId, // ForeignKey, RelationalID
      ref: "BlogCategory", //bu sekilde BlogCategory id sidir diye belirtmis oluyorum.
      //ref tanimlayinca blogCat. baglamis oluyor. Sistem bunu algiliyor.
      //ref yazdigim isim model ismi ile ayni olmali.
      //Bu iliski 1-to -many  iliskidir.
      required: true,
    },
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
    published: {
      type: Boolean,
      default: true, // bu blog yazisi yayinlansin mi? drafta almasin.
      //default'u sonradan datama ekledigim halde gordu. sebebi
      //default true yapmamdi.
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
  BlogCategory: mongoose.model("BlogCategory", blogCategorySchema),
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
