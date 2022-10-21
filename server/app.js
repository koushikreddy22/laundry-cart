const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userOrderRoute = require('./routes/userOrderRoute');






app.use(bodyParser());
app.use("/", userOrderRoute);



module.exports = app;