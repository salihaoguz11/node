"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {
  return null;

  /* CLEAR DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();

  const users = [];
  users.unshift({
    username: "test",
    password: "aA?123456",
    email: "suzan123@gmail.com",
    isActive: true,
    isAdmin: true,
  });

  console.log("- Database and all data DELETED!");
  /* CLEAR DATABASE */
};
