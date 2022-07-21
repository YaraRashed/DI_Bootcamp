// ch1
//2nd ch is in another file in the attached file

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
let promises = [promise1, promise2,promise3];

async function promiseAll(promises){
    let newArray =[];
    for (let p in promises){
        if(typeof promises[p] === 'object'){
            promises[p].then(res=>{
                newArray[p] = res;
            })
        }
        else{
            newArray[p] = promises[p];
        }

    }
    console.log(newArray);
    return newArray;
}
console.log(promiseAll(promises));


