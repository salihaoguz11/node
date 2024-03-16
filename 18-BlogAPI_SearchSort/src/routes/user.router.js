"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */
const router = require("express").Router();

const User = require("../controllers/user.controller");

// User:

// Login/Logout:

router.post("/login", User.login);
router.all("/logout", User.logout);
// router.get('/logout', User.logout)

router.route("/").get(User.list).post(User.create);
router
  .route("/:userId")
  .get(User.read)
  .put(User.update) // put patch aynı
  .patch(User.update)
  .delete(User.delete);

module.exports = router;
