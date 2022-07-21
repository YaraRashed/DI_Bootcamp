
    // .then(response => response.json())
    // .then(result => console.log(result));

//ex1
async function swapi(){
    let f = await fetch("https://www.swapi.tech/api/starships/9/");
    let res = f.json();
    console.log(res);
}
swapi();

//ex2 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
//this function will resolve the promis after the set timeout which is 2 secs

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
//This function will wait for the other sync function to execute because we have the await
//and then console log the promise received from the first function

asyncCall();
//this func will be executed first so calling then resolved will be console logged


