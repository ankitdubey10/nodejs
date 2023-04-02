/*middleware 
middleware are functions which will be usd with route
which will modify the given req and res functions
this are made when we are required to use req and res changes
changing the routes to change the req and res will be not good as we might have 100 routes
so we use middleware */
const expre = require('express');
const app = expre(); 

// create middleware
const reqFilter = (req, resp, next) => {
    // console.log('reqFilter')
    // it will keep loading and loading and will not go to next unless you call next() function 

    //check the age if it is 18 and above then only procee
    // will take age in the url
    if(!req.query.age){
        resp.send(" please enter age")
    }
    if(req.query.age<18){
        resp.send("You are below 18")
    }
    else{
        next();
    }

    // interview ---> TYPES of middleware
    // the above one is the application level middleware
    // this will be only applied to the enitre application
    }                                                                           
    

app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome our chief')
})

app.get('/user',(req,resp)=>{
    resp.send('Welcome our user')
})

app.listen(5000)