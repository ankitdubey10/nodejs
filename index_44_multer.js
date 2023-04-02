const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        
        destination: function (req, resp, callback) {
            callback(null, "uploads")
        },

        filename : function(req, resp, callback){
            callback(null, file.fieldname +"-"+Date.now()+".jpg");
        }
    })
}).single("file-name");

app.post("/upload", upload, (req, resp) =>{
    resp.send("file uploaded");
} )

app.listen(5000);
