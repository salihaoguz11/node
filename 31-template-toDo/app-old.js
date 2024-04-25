"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')

// app.all('/abc', (req, res) => { // Allow all methods. all -> URL=/ - use -> URL=/*
//     res.send('WELCOME TO TODO API')
// })
/* ------------------------------------------------------- *
// MODELS:

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instance oluştur:
const sequelize = new Sequelize('sqlite:./db.sqlite3')

// define methodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// sequelize.define('tableName', {  modelDetails  })

const Todo = sequelize.define('todos', {

    // ilk sutun olarak id sutunu sequelize tarafından otomatik oluşturulur/yönetilir.
    // anyFieldName: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default: true
    //     unique: true, // default: false
    //     comment: 'description',
    //     primaryKey: true, // default: false
    //     autoIncrement: true, // default: false
    //     field: 'custom_name',
    //     defaultValue: 'default', // default: null
    // },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: DataTypes.TEXT, // ShortHand Using.

    priority: { // -1: Low, 0: Norm, 1: High
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

    //? Not need define createdAt & updatedAt fields.
    //? id ve createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
})

// Syncronization:
// Model bilgilerini db'ye uygula:
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

// Connect to db:
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

/* ------------------------------------------------------- *
// ROUTERS:

const Todo = require('./todo.model')

const router = express.Router()

// LIST TODOS:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result: data
    })
})

//? CRUD Processes:

// CREATE TODO:
router.post('/', async (req, res) => {

    // const receivedData = req.body

    // const data = await Todo.create({
    //     title: receivedData.title,
    //     description: receivedData.description,
    //     priority: receivedData.priority,
    //     isDone: receivedData.isDone,
    //     // newKey: 'newValue' // Modelde tanımlanmadığı için bir işe yaramayacaktır.
    // })

    const data = await Todo.create(req.body)

    res.status(201).send({
        error: false,
        result: data.dataValues
    })
})

// READ TODO:
router.get('/:id', async (req, res) => {

    // const data = await Todo.findOne({ where: { id: req.params.id } })
    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error: false,
        result: data
    })

})

// UPDATE TODO:
router.put('/:id', async (req, res) => {

    // const data = await Todo.update({ ...newData }, { ...where })
    const data = await Todo.update(req.body, { where:  { id: req.params.id }})

    res.status(202).send({
        error: false,
        message: 'Updated',
        body: req.body, // Gönderdiğim veriyi göster.
        result: data,
        new: await Todo.findByPk(req.params.id) // Güncellenmiş veriyi de göster.
    })
})

// DELETE TODO:
router.delete('/:id', async (req, res) => {

    // const data = await Todo.destroy({ ...where })
    const data = await Todo.destroy({ where: { id: req.params.id } })
    // console.log(data)

    // //? 204 No Content -> Ekrana çıktı vermeyebilir.
    // res.status(204).send({
    //     error: false,
    //     message: 'Deleted',
    //     result: data
    // })

    if (data > 0) { // Silme gerçekleşti ise:
        // res.status(204).send()
        //? Sadece status çıktı ver:
        res.sendStatus(204)
    } else { // Silme gerçekleşmedi ise:
        // res.status(404).send({
        //     error: true,
        //     result: data
        // })
        //? ErrorHandler'a havale edebilirim:
        res.errorStatusCode = 404
        throw new Error('Not Found.')
    }
})

app.use(router)

/* ------------------------------------------------------- */

app.use(require('./todo.router'))

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));