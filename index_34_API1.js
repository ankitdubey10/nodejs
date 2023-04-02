// 35, 36 , 37, 38, done here
const getDbConnect = require("./index_30");
const express = require("express");
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

// app.get("/", async (request, response) => {
//     let data = await getDbConnect();
//     data = await data.find().toArray();
//     // data = await data.findOne({'First Name': 'Yash Nagesh Sakpal'});
//     response.send(data);
//     console.log(data);
// })

// app.post("/", async (req, resp) => {
//     let data = await getDbConnect();
//     let resu = await data.insertOne(req.body);
//     resp.send(resu);
// })

// app.put("/",async (req, res)=>{
//     let data = await getDbConnect();
//     let result = data.updateOne(
//         {"AMCAT ID": "4564654654146"},
//         {$set:{"First Name":"Amish Jain"}}
//     )
//     res.send({result:"anli is kere"});
// })

// app.put("/:name",async (req, res)=>{
//     let data = await getDbConnect();
//     let result = data.updateOne(
//         {name: req.body.param},
//         {$set: req.body}
//     )
//     res.send({result:"anli is kere"});
// })

app.delete("/:DOB", async (req,res)=>{
    console.log(req.params.DOB);
    res.send("done");
    let data = await getDbConnect();
    let resu = await data.deleteOne(req.params.DOB);
    res.send(resu);
})
app.listen(5000);