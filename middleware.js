module.exports =  reqFilterName = (req, resp, next) => {
    if(!req.query.name){
        resp.send(" please enter name")
    }
    if(req.query.name!='ankit'){
        resp.send("User name is incorrect")
    }
    else{
        next();
    }
}  