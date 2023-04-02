const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    middlename:String,
    gender:String,
    employeeID:Number,
    age:Number
});
module.exports = mongoose.model('class', ProductSchema);
