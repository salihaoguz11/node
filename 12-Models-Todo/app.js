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
app.use(express.json());

// Catch async-errors:
require("express-async-errors");

// app.all("/abc", (req, res) => {
//   // Allow all methods. all -> URL=/ - use -> URL=/*
//   res.send("WELCOME TO TODO APP");
// });
/* ------------------------------------------------------- */

//*Models

//*npm install sequelize sqlite3 - terminale bu kodu yaz.
/* ------------------------------------------------------- */
//MODELS

const { Sequelize, DataTypes } = require("sequelize");

//* sequelize instance oluştur:
const sequelize = new Sequelize("sqlite:./db.sqlite3");
//Bu dosya kendilinginden olusacak.

// define methodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// sequelize.define('tableName', {  modelDetails  })

const Todo = sequelize.define("todos", {
  // ilk sutun olarak id sutunu sequelize tarafından otomatik oluşturulur/yönetilir.
  // O sebeple ID field name belirtmeye ve  yazmaya gerek yok.

  // id: {
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
    allowNull: false,
  },
  description: DataTypes.TEXT, // ShortHand Using.
  priority: {
    // -1: Low, 0: Norm, 1: High
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  //? Not need define createdAt & updatedAt fields.
  //? createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
});

//* Syncronization:
// Model bilgilerini db'ye uygula:
sequelize.sync(); // CREATE TABLE-bununla db file olusur ve icine tablo gelir.
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

//* Connect to db:
sequelize
  .authenticate()
  .then(() => console.log("* DB connected"))
  .catch(() => console.log("* DB not connected"));
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// ROUTERS:
const router = express.Router();

//? LIST TODOS:
router.get("/", async (req, res) => {
  //   const data = await Todo.findAll();
  const data = await Todo.findAndCountAll();
  res.status(200).send({
    //error false yazmamim sebebi hata olunca true gelsin almazsam false gelsin. Standart olusturmak icin.
    //FE hatayi gormus olacak.
    error: false,
    result: data,
  });
});

//? CRUD Processes:

// CREATE TODO:

router.post("/", async (req, res) => {
  const receivedData = req.body;

  //   const data = await Todo.create({
  //     title: receivedData.title,
  //     description: receivedData.description,
  //     priority: receivedData.priority,
  //     isDone: receivedData.isDone,
  //     // newKey: 'newValue' // Modelde tanımlanmadığı için bir işe yaramayacaktır.
  //     //kafama gore ekleme yapamam.Kabul etmez.

  //   });

  const data = await Todo.create(req.body); // create todo shorthand
  //   console.log(data);
  res.status(201).send({
    error: false,
    result: data.dataValues,
  });
});

// READ TODO:
router.get("/:id", async (req, res) => {
  //   const data = await Todo.findOne({ where: { id: req.params.id } });
  const data = await Todo.findByPk(req.params.id);
  res.status(200).send({
    error: false,
    result: data,
  });
});

app.use(router);
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
