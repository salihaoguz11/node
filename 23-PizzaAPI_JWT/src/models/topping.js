"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Topping Model:

const ToppingSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    }

}, {
    collection: 'toppings',
    timestamps: true
})

// Model:
module.exports = mongoose.model('Topping', ToppingSchema)