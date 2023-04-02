// asynchronous programming
// console.log("first function");

// setTimeout( () => {
//     console.log("function number two after 3 seconds")
// }, 3000)
    
// console.log("last function ");

// above is the asynchronous
// where third does not waits for the 2 program to complete

// one more example
let a = 20;
let b = 0;
setTimeout( () => {
    b = 9;
    console.log(a+b); // value will be 29 but will print after 5 seconds
}, 5000)
console.log(a+b);  // value will be 20