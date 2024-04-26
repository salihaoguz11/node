"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// CONTROLLERS:

const Todo = require("../models/todo.model");

// Buyuk harf ile yazma sebebim sabit bir veri yazdim ve  burayi degistirme onemli veriler ve
// projeyi etkileyebilir.
const PRIORITY = {
  "-1": "Low",
  0: "Norm",
  1: "High",
};

module.exports = {
  list: async (req, res) => {
    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll();
    // console.log(data.rows);

    // res.status(200).send({
    //     error: false,
    //     result: data
    // })

    // View:
    res.render("todoList", {
      todos: data.rows,
      count: data.count,
      priority: PRIORITY,
    });
  },

  // CRUD:

  create: async (req, res) => {
    // const data = await Todo.create(req.body)

    // res.status(201).send({
    //     error: false,
    //     result: data.dataValues
    // })

    console.log(req.method);

    if (req.method == "POST") {
      // CREATE:

      const data = await Todo.create(req.body);

      // errorHandler çalıştığı için hataYönetimi gerek yok:
      // if (data) {
      //     // return home:
      //     res.redirect('/view') // List
      // } else {
      //     res.redirect('/view/create') // Create Form
      // }

      res.redirect("/view");
    } else {
      // VIEW:
      // Form View:
      res.render("todoCreate", { priority: PRIORITY });
    }
  },

  read: async (req, res) => {
    // const data = await Todo.findOne({ where: { id: req.params.id } })
    const data = await Todo.findByPk(req.params.id);

    // res.status(200).send({
    //   error: false,
    //   result: data,
    // });
  },

  update: async (req, res) => {
    if (req.method == "POST") {
      //UPDATE
      // const data = await Todo.update({ ...newData }, { ...where })
      const data = await Todo.update(req.body, {
        where: { id: req.params.id },
      });
      res.redirect("/view");
    } else {
      // VIEW:

      const data = await Todo.findByPk(req.params.id);
      // console.log(data.dataValues);
      res.render("todoRead", { todo: data.dataValues, priority: PRIORITY });
    }

    // res.status(202).send({
    //   error: false,
    //   message: "Updated",
    //   body: req.body, // Gönderdiğim veriyi göster.
    //   result: data,
    //   new: await Todo.findByPk(req.params.id), // Güncellenmiş veriyi de göster.
    // });
    res.render("todoUpdate", { todo: data.dataValues, priority: PRIORITY });
  },

  delete: async (req, res) => {
    // const data = await Todo.destroy({ ...where })
    const data = await Todo.destroy({ where: { id: req.params.id } });
    // console.log(data)

    // //? 204 No Content -> Ekrana çıktı vermeyebilir.
    // res.status(204).send({
    //     error: false,
    //     message: 'Deleted',
    //     result: data
    // })

    if (data > 0) {
      // Silme gerçekleşti ise:
      // res.status(204).send()
      //? Sadece status çıktı ver:
      res.sendStatus(204);
    } else {
      // Silme gerçekleşmedi ise:
      // res.status(404).send({
      //     error: true,
      //     result: data
      // })
      //? ErrorHandler'a havale edebilirim:
      res.errorStatusCode = 404;
      throw new Error("Not Found.");
    }
  },
};
