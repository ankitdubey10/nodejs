// make dynamic pages with help of ejs
// how to make loop

const expre = require('express');
const path = require('path');
const app = expre();
const folderName = path.join(__dirname,'html');

app.set('view engine','ejs');

console.log(folderName);

app.get('/me', (req,res)=>{  
    const user = {
        username: 'ankit1012',
        email: 'dubey6125',
        phoneNo: '9594078945',
        skills : ['C++', 'JS', 'Python', 'Reactjs', 'Nodejs'] // this thing addedd
    }
    res.render('profile', {user})
})

app.get('/login', (req,res)=>{   
    res.render('login') // this thing added
})

// now change the views header to header in common
// this will be done by the <%- include('foldername/filename;') %>
// if you use = it will took it as javascript file
// if you use - it will understand it as html
app.get('', (req,res)=>{
    res.sendFile(`${folderName}/index.html`);
})
app.get('/about', (req, res)=>{
    res.sendFile(`${folderName}/about.html`);
})
app.get('/contact', (req, res)=>{
    res.sendFile(`${folderName}/contact.html`);
})
app.get('*', (req, res)=>{
    res.sendFile(`${folderName}/nopage.html`);
})
app.listen(5000);