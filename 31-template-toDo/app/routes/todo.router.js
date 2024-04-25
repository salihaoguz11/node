"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTERS:

const todo = require('../controllers/todo.controller')

const router = require('express').Router()

// // List:
// router.get('/', todo.list)
// // Create:
// router.post('/', todo.create)
// // Read:
// router.get('/:id', todo.read)
// // Update:
// router.put('/:id', todo.update)
// // Delete:
// router.delete('/:id', todo.delete)

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .patch(todo.update)
    .delete(todo.delete)

module.exports = router