const expre = require("express");
const path = require("path");

const app = expre();
const folderPath = path.join(__dirname, 'htmlfolder_21');

app.use(expre.static(folderPath));
app.listen(5000);