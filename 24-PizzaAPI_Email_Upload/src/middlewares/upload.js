"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

//* UPLOAD
//? $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html
// multer module ile "form-data" verileri kabul edebiliriz. Yani dosya yükleme yapılabilir.

const multer = require('multer')

module.exports = multer({
    // dest: './uploads',
    storage: multer.diskStorage({
        destination: './uploads',
        filename: function(req, file, returnCallback) {
            // returnCallback(error, filename)
            // returnCallback(null, 'qadir.jpg')
            // console.log(file)
            // returnCallback(null, file.originalname)
            returnCallback(null, Date.now() + '-' + file.originalname)
        }
    })
})