"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTERS:

const todo = require("../controllers/todo.view.controller");

const router = require("express").Router();

// router.route('/')
//     .get(todo.list)
//     .post(todo.create)

// router.route('/:id')
//     .get(todo.read)
//     .put(todo.update)
//     .patch(todo.update)
//     .delete(todo.delete)

router.get("/", todo.list);

// router.get('/create', todo.create) // form view
// router.post('/create', todo.create) // form send
router.all("/create", todo.create);
//formu gormek icin once get yapiyorum.
//Burada hem get hemde post yaptigim icin all kullanirim.

router.all("/:id", todo.read);

router.all("/:id/update", todo.update);
router.all("/:id/delete", todo.delete);

module.exports = router;
