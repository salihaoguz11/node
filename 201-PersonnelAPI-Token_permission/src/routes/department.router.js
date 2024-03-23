"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const department = require("../controllers/department.controller");

// URL: /departments
router.route("/").get(department.list).post(department.create);

router
  .route("/:id")
  .get(department.read)
  .put(department.update)
  .patch(department.update)
  .delete(department.delete);

//her department'in personellerini getirmek icin
// /departmentId/personnels
router.get("/:id/personnels", department.personnels);
/* ------------------------------------------------------- */
module.exports = router;
