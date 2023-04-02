// handling ayschronous data
let a = 20;
let b = 0;

let waitingData = new Promise( (res, reject)=>{
    setTimeout( () => {
        res(30);
    }, 2000)
} )

waitingData.then((data)=>{
    b = data;
    console.log(a+b); 
})
     