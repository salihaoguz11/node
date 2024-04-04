"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/reservation:

const reservation = require("../controllers/reservation");

const permissions = require("../middlewares/permissions");

// URL: /reservations

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .get(reservation.read)
  .put(reservation.update)
  .patch(reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
