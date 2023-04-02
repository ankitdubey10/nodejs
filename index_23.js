// template engines are used to make dynamic web pages
/*
    DIFFERENCE b/w STATIC and DYNAMIC
    1.	In static web pages, Pages will remain same until someone changes it manually.	
        In dynamic web pages, Content of pages are different for different visitors.

    2.	Static Web Pages are simple in terms of complexity.	Dynamic web pages are complicated.

    3.	In static web pages, Information are change rarely.	In dynamic web page, Information are change frequently.

    4.	Static Web Page takes less time for loading than dynamic web page.	
        Dynamic web page takes more time for loading.

    5.	In Static Web Pages, database is not used.	
        In dynamic web pages, database is used.
    
    6.	Static web pages are written in languages such as: HTML, JavaScript, CSS, etc.	
        Dynamic web pages are written in languages such as: CGI, AJAX, ASP, ASP.NET, etc.
    
    7.	Static web pages does not contain any application program .	
        Dynamic web pages contains application program for different services.
    
    8.	Static web pages require less work and cost in designing them.	
        Dynamic web pages require comparatively more work and cost in designing them.

*/
const expre = require('express');
const path = require('path');
const app = expre();
const folderName = path.join(__dirname,'html');

app.set('view engine','ejs'); // both the parameter are fixed

console.log(folderName);

app.get('/me', (req,res)=>{  // addedd one
    const user = {
        username: 'ankit1012',
        email: 'dubey6125',
        phoneNo: '9594078945'
    }
    res.render('profile', {user})
})

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