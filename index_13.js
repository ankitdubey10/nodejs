const gs = require('fs');
// gs.writeFileSync('apple.txt','apple was founded by steve jobs and steve wozniak');
// the above thing will work for creating single file
const pathFile = require('path');
const pathFolder = pathFile.join(__dirname,'files_13');
console.log(pathFolder);
// for(i = 0; i<5; i++){
//     // gs.writeFileSync(pathFolder+"/files"+i+".txt", "This is file number");
//     gs.writeFileSync(pathFolder+`/files${i+1}.txt`,`This is file number is ${i+1}`);
//     //both methods can work
// }                                                                                                        

// reading the directory or folder named as files_13
gs.readdir(pathFolder, (err,files) => {
    // console.warn(files);
    // retursns array of files in pathfolder

    //if you want to get single not in form of an array
    // files.forEach((item)=>{
    //     console.log("this is file name -> ",item);
    // })
})


