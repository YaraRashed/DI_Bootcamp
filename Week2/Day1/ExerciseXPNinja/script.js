//**** exercise1 ****//

 //    5 >= 1
 //    // Prediction: true
	// // Actual:
 //    0 === 1
 //    // Prediction: false
	// // Actual: false
 //    // Prediction: false
	// // Actual: false
 //    1 != 1
 //    // Prediction: false
	// // Actual: false
 //    "A" > "B"
 //    // Prediction: false
	// // Actual: false
 //    "B" < "C"
 //    // Prediction: true
	// // Actual: true
 //    "a" > "A"
 //    // Prediction: false
	// // Actual: true
 //    "b" < "A"
 //    // Prediction: true
	// // Actual: false
 //    true === false
 //    // Prediction: false
	// // Actual: false
 //    true != true 
 //    // Prediction: false
	// // Actual: false


//**** exercise2 ****//

let x = prompt ("Enter 2 numbers (x,y): ");

let y = x.split(",");
console.log(y);
let sum = 0;
for (let i = 0 ; i<x.length ; i++)
{
    sum +=  Number(x[i]);
}

console.log(sum);

























