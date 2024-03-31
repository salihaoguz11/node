"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/order:

const order = require("../controllers/order");
const permissions = require("../middlewares/permissions");

// URL: /orders

router
  .route("/")
  .get(permissions.isLogin, order.list)
  .post(permissions.isLogin, order.create);

router
  .route("/:id")
  .get(permissions.isLogin, order.read)
  .put(permissions.isAdmin, order.update)
  .patch(permissions.isAdmin, order.update)
  .delete(permissions.isAdmin, order.delete);

/* ------------------------------------------------------- */
module.exports = router;
