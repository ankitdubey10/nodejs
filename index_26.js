/*

creating a route level middleware
route level can be applied on a single
it can also be applied to group of routes as well
it can also be applied to all routes

*/
const expre = require('express');
const app = expre(); 

const namefilter = require('./middleware')
const route= expre.Router();
route.use(namefilter);

const reqFilter = (req, resp, next) => {
    if(!req.query.age){
        resp.send(" please enter age")
    }
    if(req.query.age<18){
        resp.send("You are below 18")
    }
    else{
        next();
    }
}  

// this applied to one then it will be called as the sinle routr level
app.get('/',(req,resp)=>{
    resp.send('Welcome our chief')
})

route.get('/user',(req,resp)=>{ 
    resp.send('Welcome our user')
})

route.get('/about',(req,resp)=>{
    resp.send('About Page')                 // here two middleware are applied 
})                                          // age=19&name=ankit
//keeping middleware in different file is good practice

// letsay you have to apply the middleware to 25 routes from 150 routes of your web app
// so we will use const route= express.Router();
// append route instead of the app
app.use('/',route);
app.listen(5000)