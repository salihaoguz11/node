"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

// const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/blogAPI'
// mongoose.connect(MONGODB)

mongoose.connect(process.env.MONGODB)
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))