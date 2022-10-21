const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userOrderRoute = require('./routes/userOrderRoute');
const productsRoute = require('./routes/productsRoute');






app.use(bodyParser());
app.use("/orders", userOrderRoute);
app.use("/products", productsRoute);




module.exports = app;