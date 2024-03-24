"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const department = require("../controllers/department.controller");
const permissions = require("../middlewares/permissions");

// URL: /departments
router
  .route("/")
  .get(permissions.isLogin, department.list)
  //login olduk mu?,middleware calisir ve eger login isek next der.
  //middleware (permissions.isLogin,) ler hemen controller (department.list) onune yazilabilir.
  //burada next olmazsa department.list'e gecemeyecek.
  .post(permissions.isAdmin, department.create);
//admin kontrolu. Eger admin ise next

router
  .route("/:id")
  .get(permissions.isLogin, department.read)
  .put(permissions.isAdmin, department.update)
  .patch(permissions.isAdmin, department.update)
  .delete(permissions.isAdmin, department.delete);

//her department'in personellerini getirmek icin
// /departmentId/personnels
router.get("/:id/personnels", permissions.isAdminOrLead, department.personnels);
/* ------------------------------------------------------- */
module.exports = router;
