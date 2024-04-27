"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode ?? 500

    const data = {
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
        body: req.body,
    }

    // console.log(req.url)

    if (req.url.startsWith('/api')) {

        res.status(errorStatusCode).send(data)
        
    } else {

        res.render('error', { data })
    }
}