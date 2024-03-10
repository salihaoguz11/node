"use strict";
/* ====================================================== */
/*                     BLOG API CONTROLLERS               */
/* ====================================================== */

require("express-async-errors"); // error' takip edecek.
const { BlogPost } = require("../models/blog.model");

// module.exports={
//     "key":"value",
//     "key2":"value",

// }
// module.exports.key:"value"
// module.exports.key2:"value"

module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
    //http://127.0.0.1:8000/blog/posts/ index'te router cagirirken blog ekledik o sebeble araya blog eklemeyi unutmuyoruz.
  },
  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
    });
  },
  read: async (req, res) => {
    const data = await blogPost.find({ _id: req.params.postId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  delete: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
};
