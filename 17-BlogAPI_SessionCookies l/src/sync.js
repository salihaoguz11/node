"use strict";

const { BlogCategory, BlogPost } = require("./models/blog.model");

module.exports = async () => {
  /* BlogCategory */

  // Get first blogCategory:
  const blogCategory = await BlogCategory.findOne();
  // console.log(blogCategory._id)

  if (blogCategory) {
    BlogPost.updateMany(
      {
        //? Filter: BlogCat. olmayanlara
        blogCategoryId: { $exists: false }, // field yok ise
      },
      {
        //? Update: BlogCat. ekle
        blogCategoryId: blogCategory._id, // kaydı ata
      }
    ).catch((err) => console.log(err));
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};
