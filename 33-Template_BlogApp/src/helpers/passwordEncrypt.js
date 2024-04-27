"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Password Encrypt:
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY || 'write_random_chars_to_here'
const loopCount = 10_000
const charsCount = 32 // write 32 for 64
const encType = 'sha512'

module.exports = function (password) {

    const encode = crypto.pbkdf2Sync(password, keyCode, loopCount, charsCount, encType) // return BufferType
    return encode.toString('hex')
}