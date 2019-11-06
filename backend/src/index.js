const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
mongoose.connect("'" + process.env.DB_CONNECTION + "'", { useNewUrlParser: true }, () => console.log('connected'))

app.use(express.json());
app.use(routes);

app.listen(3333,  ()=> console.log("server running"));