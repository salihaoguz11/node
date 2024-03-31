"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");
const { isAdmin } = require("../middlewares/permissions");

// URL: /pizzas

router.route("/").get(pizza.list).post(isAdmin, pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(isAdmin, pizza.update)
  .patch(isAdmin, pizza.update)
  .delete(isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
