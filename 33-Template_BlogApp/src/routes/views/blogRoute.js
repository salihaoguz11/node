"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

// Call Controllers:
const {
  BlogCategory,
  BlogPost,
} = require("../../controllers/views/blogController");

// ------------------------------------------
// BlogCategory
// ------------------------------------------
// URL: /views/blog

router.all("/category", BlogCategory.list);
router.all("/category/create", BlogCategory.create);
router.all("/category/:CategoryId", BlogCategory.read);
router.all("/category/:CategoryId/update", BlogCategory.update);
router.all("/category/:CategoryId/delete", BlogCategory.delete);

// ------------------------------------------
// BlogPost
// ------------------------------------------
// URL: /views/blog

router.all("/post", BlogPost.list);
router.all("/post/create", BlogPost.create);
router.all("/post/:postId", BlogPost.read);
router.all("/post/:postId/update", BlogPost.update);
router.all("/post/:postId/delete", BlogPost.delete);

router.all("/category/:categoryId/posts", BlogPost.listCategoryPosts);

// router.route("/post").get(BlogPost.list).post(BlogPost.create);

// router
//   .route("/post/:postId")
//   .get(BlogPost.read)
//   .put(BlogPost.update)
//   .delete(BlogPost.delete);

// router.get("/category/:categoryId/posts", BlogPost.listCategoryPosts);

module.exports = router;
