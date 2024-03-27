"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/auth:

const auth = require('../controllers/auth')

// URL: /auth

// Login/logout:
router.post('/login', auth.login)
// router.all('/logout', auth.logout)
router.get('/logout', auth.logout)

/* ------------------------------------------------------- */
module.exports = router