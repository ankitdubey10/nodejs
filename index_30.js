// connecting mongo with the nodejs
const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getDbConnect() {
    let res = await client.connect();
    let db = res.db('student');
    return db.collection('testrasult');
    // let collectionNumberOne = db.collection('student');
    // let resp = await collectionNumberOne.find({DOB:'2001-05-04'}).toArray(); 
    // console.log(resp);
}
// console.warn(getDbConnect());// still showing as it is a promise
// we can connect more than one database
// we must have async for await

// got the warnign pf promize which is pending
// to handle promise wee need to use then
// getDbConnect().then((resp)=>{
//     // console.warn(resp.find().toArray());    // this too will resut into pending as toArray also create promise

//     resp.find({"First Name":"Osama Shaikh"}).toArray().then((data)=>{
//         console.log(data);
//     })
//     // this is above is working here                                                                         
// })

// the above was the task to handle promises
module.exports = getDbConnect;



