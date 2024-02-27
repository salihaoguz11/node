"use strict";
// Node Js Server
require("dotenv").config(); //env file dan verileri alir ve process.env ye ekler.;
// const PORT = process.env.PORT;
// const HOST = process.env.HOST;

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

//npm i express
const express = require("express");
const app = express();

console.log("express server");
