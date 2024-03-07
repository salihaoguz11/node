"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// MODELS:

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instance oluştur:
const sequelize = new Sequelize('sqlite:./db.sqlite3')

// POSTGRESQL CONNECTION:
// $ npm i pg pg-hstore
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// const sequelize = new Sequelize('postgres://userCH15:12345678@localhost:5432/testCH15')

// MYSQL CONNECTION:
// $ npm i mysql2 
// $ npm i mariadb // Alternative
// const sequelize = new Sequelize('mysql://user:pass@localhost:3306/dbname')

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
        // type: DataTypes.TINYINT, // postgresql desteklemiyor.
        type: DataTypes.INTEGER,
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

module.exports = Todo
