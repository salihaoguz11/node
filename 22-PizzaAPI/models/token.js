"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Token Model:

const TokenSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
        index: true,
    },

    token: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    }

}, {
    collection: 'tokens',
    timestamps: true
})

// Model:
module.exports = mongoose.model('Token', TokenSchema)