"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/car:

const car = require("../controllers/car");

const permissions = require("../middlewares/permissions");

// URL: /cars
router.route("/").get(car.list).post(car.create);

router
  .route("/:id")
  .get(car.read)
  .put(car.update)
  .patch(car.update)
  .delete(car.delete);

/* ------------------------------------------------------- */
module.exports = router;
