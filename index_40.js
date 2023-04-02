const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/student');
    
const ProductSchema = new mongoose.Schema({
        "DOB": String,                                                                                          
        "AMCAT ID": Number,
        "Degree":String
});

const saveInDB = async () => {
    const Product = mongoose.model('gotits', ProductSchema);
    let data = new Product({
        "DOB":"ankit",
        "AMCAT ID":4654654654645,
        "Degree":"B.TECH"
    });         
    let resu = await data.save();
    console.log(resu);
}
// saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model('gotits',ProductSchema);
    let data = await Product.updateOne(
        {"DOB":"kdhas"},{$set:{"Degree":"M.Tech"}}
    )
    console.log(data);
}

const deleteInDB = async () => {
    const Product = mongoose.model('gotits',ProductSchema);
    let data = await Product.deleteOne({"Degree":"BS"});
    console.log(data);
}

// deleteInDB();

const getInDB = async () => {
    const Product = mongoose.model('gotits',ProductSchema);
    let data = await Product.find({});
    console.log(data);
}

// getInDB();