//EX1 

function compareToTen(num){
    let isTen = new Promise((resolve,reject) => {
        if(num<10){
            resolve("resolved");
        }else{
            
            reject("rejected");
        }
    })
    return isTen;
};


let p1 = (compareToTen(15));

p1
.then(result => console.log(result))
.catch(error => console.log(error));
  
let p2 = compareToTen(8);
p2
  .then(result => console.log(result))
  .catch(error => console.log(error));




//EX2 

// 1 



setTimeout(()=>{
    let p = new Promise((resolve,reject)=>{
        if(true){
            // console.log("success");
            resolve("success")
        }else{
            reject("unsuccessful")
        }
    })
    .then(res=>{console.log(res)});
},4000);

//2  //3 
//using the promise.resolve can have it done faster

let p = Promise.resolve("success"); //when success is changed it throws the error
p.then(res =>{
    if(res === "success"){
    console.log(res);
    }
    else{
    throw new Error("error");
    }

})
p.catch(error=>{
    console.log("Ooops something went wrong");
})


//EX 3 
//1
let value =2;
let p2 = Promise.resolve(value)
.then(res =>{
    if(res===3)
    {
        console.log(`Success -> the value is: ${res}`);
    }
    else {
        throw new Error("value is not equal to 3");
    }
});

//2

let p3 = Promise.reject(new Error("Boo!"));




