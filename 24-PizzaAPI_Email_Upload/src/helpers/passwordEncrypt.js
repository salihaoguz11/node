"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// passwordEncrypt(password:string):

const crypto = require('node:crypto'),
    keyCode = process.env.SECRET_KEY,
    loopCount = 10_000,
    charCount = 32,
    encType = 'sha512';

module.exports = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}