// *** exercise 1 ***

// // #1 --> 3
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console:
// q1()

//#2 --> 
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// q22() // 0
// q2() // 5
// q22() // 5

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// q3() 
// q32()

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4() //test

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); //5
// }
// alert(a); //5


// // *** exercise 2 ***
// const winBattle = () => {return true;};
// let experiencePoints = winBattle() ? 0 : 1;
// console.log(experiencePoints);


// *** exercise 3 ***

// function isString(str){
//     let bool = (typeof(str)=== 'string') ? true : false;
//     console.log(bool);
// }

// isString('hello');
// isString([1, 2, 4, 0]);



// *** exercise 4 ***

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// colors.forEach((element,index) => {
//     console.log(`#${index+1} choice is ${element}`);
//     if(element==="Violet")
//         console.log("Yeah");
//     else console.log("Nope");
    
// });


// *** exercise 5 ***

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// color.forEach((element,index) => {
//     console.log(`#${index+1} choice is ${element}`);
//     if(element==="Violet")
//         console.log("Yeah");
//     else console.log("Nope");
    
// });

// *** exercise 6 ***

let bankAmount = 500;
const vat = 0.17;
let details = ["+350", "-32", "-52", "+167", "-2900"];

function vat_cal(array){
    for(let i in array){
        array[i] = array[i] + (array[i]*vat);
    }
    return array;
}
let arr = vat_cal(details);
console.log(arr);