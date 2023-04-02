const getDbConnect = require('./index_30')
const main = async () => {
    let data = await getDbConnect();
    data = await data.find({"First Name":"Osama Shaikh"}).toArray();
    console.log(data);
}
main();

// thid id able to read