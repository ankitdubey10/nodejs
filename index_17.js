console.log("starting up");  // first thsi got printed

setTimeout(() => {
    console.log("2 second log ");  // fourth thsi got printed
}, 2000);

setTimeout(() => {
    console.log("0 seconds delay ")  // third thsi got printed
}, 0);

console.log("finishihg up");  // second thsi got printed

// setimeout is part of NODEapi not call stack
// setimout is part of C++ and C
// all those thigns which are inherited from c ad c++ will be stored in NodeAPI not in call stack
// it is stored there because first it will be stored there in the interface where two things are 
// sharing someting ( c++ is giving the setitmout to node); 

// 