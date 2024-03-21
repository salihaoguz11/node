"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions (authorization)

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user && req.user.isActive) {
      //req.user.isActive kontrol ediyorum.
      // Cunku login olduktan sonra belki isActive false'a donebilir. Mesela uyelik bitmis olabilir.
      next(); // devam etmesine izin ver
    } else {
      res.statusCode = 403;
      throw new Error("NoPermission: You must login.");
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isActive && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login and to be Admin.");
    }
  },
  isLead: (req, res, next) => {
    // lead sadece kendi departmeninin verilerine ulasabilir.

    const departmentId = req.params?.id;
    if (
      req.user &&
      req.user.isActive &&
      (req.user.isAdmin || req.user.departmentId == departmentId)
    ) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login and to be Admin.");
    }
  },
};
