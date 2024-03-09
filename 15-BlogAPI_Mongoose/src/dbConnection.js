"use strict";
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/blogAPI");
const MONGODB = process.env.MONGODB;
mongoose
  .connect(MONGODB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));
