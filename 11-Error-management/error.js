//* npm init -y
//* npm i express  dotenv
//* gitignore
//*echo PORT=8000> .env
//*nodemon error.toJSON()

"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT

    ------------------------------------------------------- */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
