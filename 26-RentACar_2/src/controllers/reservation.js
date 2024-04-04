"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Reservation Controller:

const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
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
    const data = await res.getModelList(Reservation);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Reservation'
                }
            }
        */

    // "Admin/staf değilse" veya "UserId göndermişmemişse" req.user'dan al:
    if ((!req.user.isAdmin && !req.user.isStaff) || !req.body?.userId) {
      req.body.userId = req.user._id;
    }

    // createdId ve updatedId verisini req.user'dan al:
    //req.user bilgisini elde etme icin user login olmali.
    //Ve header kismina token yazarak create talebinde bulunmak gerekir.
    req.body.createdId = req.user._id;
    req.body.updatedId = req.user._id;
    // console.log(req.user);

    const data = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
                    #swagger.tags = ["Reservations"]
                    #swagger.summary = "Get Single Reservation"
                */

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Reservation'
                }
            }
        */

    // Admin değilse rezervasyona ait userId değiştirilemez:
    if (!req.user.isAdmin) {
      delete req.body.userId;
    }

    // updatedId verisini req.user'dan al:
    req.body.updatedId = req.user._id;

    res.status(202).send({
      error: false,
      data,
      new: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
                    #swagger.tags = ["Reservations"]
                    #swagger.summary = "Delete Reservation"
                */

    const data = await Reservation.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
