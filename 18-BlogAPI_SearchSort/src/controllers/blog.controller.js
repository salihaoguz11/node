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
    // const data = await BlogCategory.find();
    const data = await res.getModelList(BlogCategory);
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
    //! FILTERING:
    // URL?filter[key1]=value1&filter[key2]=value2
    // console.log(req.query);
    const filter = req.query?.filter || {};
    // console.log(filter);

    //! SEARCHING:
    // URL?search[key1]=value1&search[key2]=value2
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/

    const search = req.query?.search || {};
    // console.log(search);
    for (let key in search) {
      //?{ title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }
      // search['title'] = { $regex: search['title'] }
      // search['content'] = { $regex: search['content'] }
      search[key] = { $regex: search[key], $options: "i" }; // i: insensitive
    }

    //! SORTING:
    // URL?sort[key1]=asc&sort[key2]=desc
    // 1: A-Z - -1: Z-A // deprecated
    // asc: A-Z - desc: Z-A
    const sort = req.query?.sort || {};
    console.log(sort);

    //! PAGINATION:
    // URL?page=3&limit=10

    // Limit:Sayfa basi kac kayit getirecegiz.
    let limit = Number(req.query?.limit);
    // console.log(limit);
    // limit = limit > 0 ? limit : 20;
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);
    console.log("limit", limit);

    //! Page:
    let page = Number(req.query?.page);
    // page = page > 0 ? page : 1;
    page = page > 0 ? page - 1 : 0; // Backend 'de sayfa sayısı her zmaan page-1 olarak hesaplanmalı.
    console.log("page", page);

    //! Skip:
    // LIMIT 20, 10
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : page * limit;
    console.log("skip", skip);

    /* FILTERING & SEARCHING & SORTING & PAGINATION */

    // const data = await BlogPost.find(filter);
    // const data = await BlogPost.find(search);
    // const data = await BlogPost.find({ ...filter, ...search });
    // const data = await BlogPost.find({ ...filter, ...search }).sort(sort);
    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .limit(limit);
    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .skip(skip)
    //   .limit(limit);

    const data = await res.getModelList(BlogPost, "blogCategoryId");

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(BlogPost),
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
