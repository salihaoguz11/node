"use strict";
/* ====================================================== */
/*                     BLOG API ROUTES              */
/* ====================================================== */
const router = require("express").Router();

const { BlogPost, BlogCategory } = require("../controllers/blog.controller");

// BlogCategory:
router.route("/categories").get(BlogCategory.list).post(BlogCategory.create);
router
  .route("/categories/:categoryId")
  .get(BlogCategory.read)
  .put(BlogCategory.update) // put patch aynı
  .patch(BlogCategory.update)
  .delete(BlogCategory.delete);

// BlogPost:
router.route("/posts").get(BlogPost.list).post(BlogPost.create);

router
  .route("/posts/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update) // put patch aynı
  .patch(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
