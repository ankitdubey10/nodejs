// getting input from the command line
// console.log(process.argv);
// console.log(process.argv[2]);
//process itself is very big 
//1st is showing the runnign file
//2nd is shoeing the file directroy

//creating the file with the input so fs must be there
const fi = require('fs');
const p = process.argv;
if(p[2]=='add') fi.writeFileSync(p[3],p[4]);
else if(p[2] == 'remove') fi.unlinkSync(p[3]);
else console.log("invalid input");
