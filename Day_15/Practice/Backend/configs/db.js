const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://sumandevimehmi36:sumandevi@cluster0.vukt4os.mongodb.net/myfirstDB?retryWrites=true&w=majority&appName=Cluster0 ");

//exporting this file into index.js
//curly braces to move move more than 1 module
module.exports={
    connection
}
