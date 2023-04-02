const getDbConnect = require('./index_30');
async function updating(){
    let data = await getDbConnect();
    let upda = await data.deleteMany(
        {"First Name":"Ankit Jain"},
    )
    if(upda.acknowledged) console.log("updated",upda);
}
updating();