"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* ------------------------------------------------------- *
https://mongoosejs.com/docs/models.html

const nameSchema = new mongoose.Schema({
    
    // _id: // AUTO CREATED

    // fieldName: String // Shorthand Using
    fieldName: {
        type: String, // Veri tipi
        defualt: null, // Default bir değer atayabiliriz.
        trim: true, // Gelen veriyi trim'den geçir: trim(data)
        select: true, // Data çağrıldığında gelsin mi?
        index: false, // Daha hızlı erişim olsun mu?
        unique: false, // Benzersiz kayıt olsun mu?
        required: [true, 'Error-Message'], // JSON data içinde gelmesi zorunlu mu?
        enum: [[0, 1, 2, 3], 'Error-Message'], // Pattern/Constraint/Limit/Choices
        validate: [function(data) { return true }, 'Error-Message'], // Veriyi filtreden geçiren fonksiyon.
        get: function(data) { return data }, // Veri çağırırken çalıştırılacak fonksiyon
        set: function(data) { return data }, // Veri kaydederken çalıştırılacak fonksiyon
    }

}, {
    collection: 'collectionName', // Tablo ismi ne olsun?
    timestamps: true, // Create and Manage 'createdAt' and 'updatedAt'
})

/* ------------------------------------------------------- */
// ------------------------------------------
// BlogCategory
// ------------------------------------------

const blogCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    }

}, {
    collection: 'blogCategories',
    timestamps: true
})

// ------------------------------------------
// BlogPost
// ------------------------------------------
const blogPostSchema = new mongoose.Schema({

    // _id

    userId: {
        type: mongoose.Schema.ObjectId, // Relational ObjectId
        ref: 'User', // ModelName
        required: true,
    },

    blogCategoryId: {
        type: mongoose.Schema.ObjectId, // Relational ObjectId
        ref: 'BlogCategory', // ModelName
        required: true,
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    published: {
        type: Boolean,
        default: true
    },

    // createdAt
    // updatedAt

}, { collection: 'blogPosts', timestamps: true })

// const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)
// module.exports = {
//     // BlogCategory:
//     BlogPost: BlogPostModel
// }

// ------------------------------------------
// Export
// ------------------------------------------
module.exports = {
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}