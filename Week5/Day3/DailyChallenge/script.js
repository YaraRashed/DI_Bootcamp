// let arr =["hello" , "this" , "is" , "Yara", "Rashed"];


function check(array){
     return array.every((element)=>{typeof element==="string"});
    }
// let arr =["THIS","IS","YARA","RASHED","POL"];
function check2(array){

    for(let i=0; i<array.length; i++){
        if((array[i].toUpperCase()===array[i]) && array.length>4) {
            console.log(array);
            return true;
        }
        else{
            console.log("array reqs not met -> check2 func");
            return false;;
        }
    }
}

// console.log(check2(arr));

const makeAllCaps = function(arr){
    let newArr = [];
    let p = new Promise((resolve,reject)=>{
        if(check(arr)){
            
            resolve("success : array entries are all strings")
            for(let i=0; i<arr.length; i++){
                newArr[i] = arr[i].toUpperCase();
            }
            console.log(newArr)
            // return newArr;
            
        }
        else{
            return console.log(reject("failure : array entries are not strings"));
        }
    })
    return newArr;
}

// console.log(makeAllCaps([1, "pear", "banana"]));

// console.log(makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"]))

const sortWords = function (array){
    let p1= new Promise((reject,resolve)=>{
        if(array.length > 4){
            console.log(array.length);
            array.sort();            
            console.log(array);
            console.log(p1);
            return resolve("resolved : array > 4");

            // return array;
        }
        else{
            return reject("rejected : array < 4");
        }
    })
    return array;
}
// let p3 = sortWords(["apple", "pear", "banana", "blah" , "lo"]);

// makeAllCaps(["pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))