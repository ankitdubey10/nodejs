// from 49 to 52 crud on mysql
const express = require('express');
const con = require("./index_48_mysql");
const app = express();
app.use(express.json());
app.get("/", (req, resp)=>{
    con.query("select * from student", (err,result)=>{
        if(err) resp.send("error");
        else resp.send(result);
    });
})

app.post("/", (re, resps) => {
    const data = re.body;
    con.query("insert into student SET ? ", data, (error,result, fields)=>{
        if(error) error;
        resps.send(result);
    })
})

app.put("/:roll_no",(re, resp)=>{
    // const data = [89,"anisha","4","C",959775120,0];
    const data = [re.body.roll_no, re.body.stud_name, re.body.class, re.body.class_div, re.body.mob_no, re.params.roll_no]
    con.query("update student set roll_no = ?, stud_name = ?, class = ?, class_div = ?, mob_no =? where roll_no = ?", 
    data, 
    (error, result, fields)=>{
        if(error) error;
        resp.send(result);
    })
})

app.delete("/:roll_no", (req,resp)=>{
    const data = req.params.roll_no; 
    con.query("delete from student where roll_no = ?", data, 
    (error, result, fields)=>{
        if(error) error;
        resp.send(req.params.roll_no);
    })
})
app.listen(5000);