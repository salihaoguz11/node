"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Pizza Controller:
const Pizza = require("../models/pizza");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "List Pizzas"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const data = await res.getModelList(Pizza, {}, "toppingIds");

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Pizza),
      data,
    });
  },

  // CRUD:

  create: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Create Pizza"
        */

    const data = await Pizza.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Get Single Pizza"
        */

    const data = await Pizza.findOne({ _id: req.params.id }).populate(
      "toppingIds"
    );

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Update Pizza"
        */

    console.log(req.file); // upload.single()
    console.log(req.files); // upload.array() || upload.any()
    /*
  {
    fieldname: 'images',
    originalname: 'marcell-rubies-cKGtI-S5EPY-unsplash.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: './uploads',
    filename: '1711916565749-marcell-rubies-cKGtI-S5EPY-unsplash.jpg',
    path: 'uploads/1711916565749-marcell-rubies-cKGtI-S5EPY-unsplash.jpg',
    size: 6177333
  }
    */

    // Mevcut pizza resimlerini getir:
    const pizza = await Pizza.findOne(
      { _id: req.params.id },
      { _id: 0, images: 1 }
    ); //sadece image a ihtiyacim var.
    //diger datalara ihtiyacim yok. id gelmesin istiyorum. { _id: 0, images: 1 }

    // pizza.images
    // if (pizza.images.length > 5) {
    //   res.status(400).send(" you have enough images");
    // } else {
    for (let file of req.files) {
      // Mevcut pizza resimlerine ekle:
      // pizza.images.push(file.filename)
      pizza.images.push("/uploads/" + file.filename);
    }
    // Pizza resimlerini req.body'ye aktar:
    req.body.images = pizza.images;
    // console.log(req.body.images.length);
    // }

    const data = await Pizza.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Pizza.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Pizzas"]
            #swagger.summary = "Delete Pizza"
        */

    const data = await Pizza.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
