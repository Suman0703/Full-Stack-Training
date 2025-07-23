// require('dotenv').config();

const mongoose = require('mongoose');
require('dotenv').config();


const connection = mongoose.connect(process.env.MONGO_URL)
//exporting this file into index.js
//curly braces to move move more than 1 module
module.exports={
    connection
}