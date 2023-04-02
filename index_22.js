const expre = require('express');
const path = require('path');

const app = expre();
const folderName = path.join(__dirname,'html');
console.log(folderName);
app.get('', (req,res)=>{
    res.sendFile(`${folderName}/index.html`);
})
app.get('/about', (req, res)=>{
    res.sendFile(`${folderName}/about.html`);
})
app.get('/contact', (req, res)=>{
    res.sendFile(`${folderName}/contact.html`);
    
})
// if none matched
app.get('*', (req, res)=>{
    res.sendFile(`${folderName}/nopage.html`);
})
app.listen(5000);

// interview how to remove file extension in a page
// by using the sendfile function of get
