const mysql = require("mysql");
const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3308,
    database:"sms"
});
con.connect((err)=>{
    if(err)
    {
        console.warn("not connected");
    }
    else
    {
        console.warn("coonnected");
    }
});
module.exports = con;