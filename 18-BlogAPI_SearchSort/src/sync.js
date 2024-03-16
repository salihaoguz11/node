"use strict";
const User = require("./models/user.model");
const { BlogCategory, BlogPost } = require("./models/blog.model");

module.exports = async () => {
  /* BlogCategory *
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
    /* BlogCategory */

  /* Exampla Data */
  // Deleted All Records:
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await BlogCategory.deleteMany().then(() =>
    console.log(" - BlogCategory Deleted All")
  );
  await BlogPost.deleteMany().then(() =>
    console.log(" - BlogPost Deleted All")
  );

  // Example User:
  const user = await User.create({
    email: "test@test.com",
    password: "12345678",
    firstName: "Test",
    lastName: "Test",
  });
  // Example Category:
  const blogCategory = await BlogCategory.create({
    name: "Test Category",
  });

  // Example Posts:
  for (let key in [...Array(200)]) {
    await BlogPost.create({
      userId: user._id,
      blogCategoryId: blogCategory._id,
      title: `test ${key} title`,
      content: `test ${key}  content`,
      published: Boolean(key % 2),
    });
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};
