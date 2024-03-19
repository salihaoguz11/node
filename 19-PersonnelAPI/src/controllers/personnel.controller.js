"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Personnel =require("../models/personnel.model")

module.exports={
    list:async(req,res)=>{
        const data = await res.getModelList(Personnel,departmentId)
        res.status(200).send({
            error:false,
            detail:await res.getModelListDetails(Personnel),
            data
        })
    },

    create:async(req,res)=>{
        const data =await Personnel.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    }




    read:
    update:
    delete:
}