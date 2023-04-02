// crud with files
const gs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud_14');
// console.log(dirPath);
const filepath = `${dirPath}/crud.txt`;
// console.log(filepath);

// created the file with the help of the path
// gs.writeFileSync(filepath, "thsi is file for the crud");

//reading the file with the help 
// gs.readFile(filepath,'utf8',(err,item) => {
//     console.log(item);
// })

//adding tsomething
// gs.appendFile(filepath, " nd line ti ", (err) => {
//     if(!err) console.log("file is updated");
// });

// remaing teh file name
// gs.rename(filepath, `${dirPath}/newns.txt`, (err) => {
//     if(!err) console.log("not error");
// })


// deleting the file
// gs.unlinkSync(`${dirPath}/new.txt`);