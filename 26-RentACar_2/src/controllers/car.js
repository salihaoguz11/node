"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Car Controller:

const Car = require("../models/car");
const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "List Cars"
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

    // Musait olmayan araçları listeleme:
    let customFilter = { isAvailable: true };

    /* TARIHE GÖRE LİSTELE */

    // List by dateFilter:
    // URL?startDate=2024-01-01&endDate=2024-01-10
    const { startDate: getStartDate, endDate: getEndDate } = req.query;

    if (getStartDate && getEndDate) {
      // Belirtilen tarihlerde reserve edilmiş araçları getir:
      const reservedCars = await Reservation.find(
        {
          $nor: [
            { startDate: { $gt: getEndDate } },
            { endDate: { $lt: getStartDate } },
          ],
        },
        { _id: 0, carId: 1 }
      ).distinct("carId");
      // console.log(reservedCars);
      // Gelen Data:
      // [
      //     { carId: new ObjectId("660d9d2932ba8b3174a05721") },
      //     { carId: new ObjectId("660d9d2932ba8b3174a05721") }
      // ]
      // convert to Filtre Data (distinct);
      // [
      //    new ObjectId("660d9d2932ba8b3174a05721"),
      //    new ObjectId("660d9d2932ba8b3174a05721")
      // ]
      // Filter objesine NotIN (nin) ekle:
      if (reservedCars.length) {
        customFilter._id = { $nin: reservedCars };
      }
    } else {
      req.errorStatusCode = 401;
      throw new Error("startDate and endDate queries are required.");
    }

    /* TARIHE GÖRE LİSTELE */

    // const data = await res.getModelList(Car, { _id: { $nin: ['carid12345667', 'carid12345667']} }
    const data = await res.getModelList(Car, customFilter, [
      { path: "createdId", select: "username" },
      { path: "updatedId", select: "username" },
    ]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Car, customFilter),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Create Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Car'
                }
            }
        */

    // createdId ve updatedId verisini req.user'dan al:
    req.body.createdId = req.user._id;
    req.body.updatedId = req.user._id;

    const data = await Car.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Get Single Car"
        */
    const data = await Car.findOne({ _id: req.params.id }).populate([
      { path: "createdId", select: "username" },
      { path: "updatedId", select: "username" },
    ]);

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Update Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Car'
                }
            }
        */

    // updatedId verisini req.user'dan al:
    req.body.updatedId = req.user._id;

    const data = await Car.updateOne(customFilter, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Car.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Delete Car"
        */
    const data = await Car.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
