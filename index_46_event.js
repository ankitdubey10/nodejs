const express = require("express");
const EvenEmitter = require("events");
const app = express();

const event = new EvenEmitter();
let count = 0;

event.on("countAPI", ()=>{
    count++;
    console.log("event called", count);
})

app.get("/",(re, resp)=>{
    resp.send("get it");
    event.emit("countAPI");
})

app.post("/",(re, resp)=>{
    resp.send("post it");
    event.emit("countAPI");
})

app.put("/",(re, resp)=>{
    resp.send("put it");
    event.emit("countAPI");
})

app.delete("/",(re, resp)=>{
    resp.send("delete it");
    event.emit("countAPI");
})

app.listen(5000);