"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/topping:

const topping = require("../controllers/topping");
const { isAdmin } = require("../middlewares/permissions");

// URL: /toppings - sadece admin islem yapar bu route ta.

router.use(isAdmin);

router.route("/").get(topping.list).post(topping.create);

router
  .route("/:id")
  .get(topping.read)
  .put(topping.update)
  .patch(topping.update)
  .delete(topping.delete);

/* ------------------------------------------------------- */
module.exports = router;
