const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGODBURI;

const db = mongoose.connect(uri)

module.exports = db