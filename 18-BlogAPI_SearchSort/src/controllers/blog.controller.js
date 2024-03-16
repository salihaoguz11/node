"use strict";
/* ====================================================== */
/*                     BLOG API CONTROLLERS               */
/* ====================================================== */

require("express-async-errors");

const { BlogPost, BlogCategory } = require("../models/blog.model");

// module.exports={
//     "key":"value",
//     "key2":"value",

// }
// module.exports.key:"value"
// module.exports.key2:"value"

module.exports.BlogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogCategory.find({ _id: req.params.categoryId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );
    const newdata = await BlogCategory.find({ _id: req.params.categoryId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsan tekrar çağır
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });
    // console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};

module.exports.BlogPost = {
  list: async (req, res) => {
    /* FILTERING & SEARCHING & SORTING & PAGINATION */
    // FILTERING:
    // URL?filter[key1]=value1&filter[key2]=value2
    // console.log(req.query);
    const filter = req.query?.filter || {};
    // console.log(filter);

    // SEARCHING:
    // URL?search[key1]=value1&search[key2]=value2
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/

    const search = req.query?.search || {};
    console.log(search);
    //{ title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }
    for (let key in search) {
      search[key] = { $regex: search[key] };
    }
    console.log(search);
    /* FILTERING & SEARCHING & SORTING & PAGINATION */
    const data = await BlogPost.find(filter);
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
  },
  read: async (req, res) => {
    const data = await BlogPost.find({ _id: req.params.postId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);
    const newdata = await BlogPost.find({ _id: req.params.postId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsan tekrar çağır
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    // console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
