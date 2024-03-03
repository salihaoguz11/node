"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
//* ERROR HANDLER

//? errorHandler is middleware and has must be four parameters. (error, request, response, next)
module.exports = (err, req, res, next) => {

    // console.log(err)
    console.log('errorHandler started.')

    const errorStatusCode = res?.errorStatusCode || 500

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        stack: err.stack,
    })
}