"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");
const { isAdmin } = require("../middlewares/permissions");

/* ------------------------------------------------------- */
//? $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html
// multer module ile "form-data" verileri kabul edebiliriz. Yani dosya yükleme yapılabilir.

// const multer = require("multer");

// const upload = multer({
//   // dest: './uploads', dosyalari upload isminde bir dosyaya yukle
//   storage: multer.diskStorage({
//     // storage yazarsam daha fazla ayar yapabilirim.
//     destination: "./uploads", // ana klasorde upload isminde dosyaya dosya yuklemelerini yap.
//     //bu dosya otomatik olusur.
//     filename: function (req, file, returnCallback) {
//       // returnCallback(error, filename)
//       // returnCallback(null, "manzara.jpg");
//       console.log(file);
//       // returnCallback(null, file.originalname);
//       returnCallback(null, Date.now() + "-" + file.originalname);
//     },
//   }),
// });

const upload = require("../middlewares/upload");

/* ------------------------------------------------------- */

// URL: /pizzas

router
  .route("/")
  .get(pizza.list)
  // .post(isAdmin, pizza.create)
  // .post(isAdmin, upload.single('fileInputName'), pizza.create)
  // .post(isAdmin, upload.array("fileInputName"), pizza.create); // recommended.
  .post(isAdmin, upload.array("images"), pizza.create); // recommended.
// .post(isAdmin, upload.any(), pizza.create) // not recommended.

router
  .route("/:id")
  .get(pizza.read)
  .put(isAdmin, upload.array("images", 4), pizza.update)
  // .put(isAdmin, upload.array("fileInputName"), pizza.update)
  .patch(isAdmin, upload.array("images"), pizza.update)
  .delete(isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
