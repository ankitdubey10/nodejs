const express = require('express');
require('./mongo_config_41');
const product = require('./mongo_product_41');
const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new product(req.body);
    let resu = await data.save();
    console.log(resu);
    resp.send(resu);
})
// 42 is heere only
app.get("/list", async (req, resp) => {
    let dat = await product.find();
    resp.send(dat);
})

app.delete("/delete/:_id", async (req, resp) => {
    let data = await product.deleteOne(req.params);
    resp.send(data);
})
app.put("/update/:_id", async (req, resp) => {
    let data = await product.updateOne
        (
            req.params,
            { $set: req.body }
        );
    resp.send(data);
})
//search api 43
app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key);
    let data = await product.find({
        "$or": [
            {"gender":    { $regex: req.params.key } },
            {"lastname":   { $regex: req.params.key } },
            {"firstname":  { $regex: req.params.key } },
            {"age":        { $regex: req.params.key } },
            {"employeeID": { $regex: req.params.key } }
        ]
    });
    resp.send(data);
})
app.listen(5000);