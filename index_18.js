// express js is the framework of the Nodejs
const expre = require('express')
const app = expre();
app.get("", (req, res)=>{
    res.send("thisn sis hoe");
})

app.get("/about", (req, rsp)=>{
    rsp.send("this is about");
})

app.get("/contactus", (req, resp)=>{
    resp.send("about contact details");
})

app.listen(5000);
