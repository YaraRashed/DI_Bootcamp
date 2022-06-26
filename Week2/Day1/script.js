//***** exercise1 ******//


let favFood = "salad";
let favMeal = "lunch";
let x = `I eat ${favFood} at every ${favMeal}`;
console.log(x);

//***** exercise2 ******//

	//part I

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence = myWatchedSeries[1];
console.log(myWatchedSeriesSentence);
let sentence = `I only watched one series : ${myWatchedSeriesSentence}`;
console.log(sentence);
	//part II

//1.
console.log(myWatchedSeries); //for testing
myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries); 

//2.
myWatchedSeries.push("breaking bad");
console.log(myWatchedSeries);

//3.
myWatchedSeries.splice(0,0,"suits");
console.log(myWatchedSeries);

//4.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

 //5.
console.log(myWatchedSeries[1][2]);

//6.
console.log(myWatchedSeries);


//***** exercise3 ******//

let temp_inC = 30;
console.log("The temperature in celsius is " + temp_inC);
let temp_inF = (((temp_inC)/5)*9) + 32;
console.log("The temperature in fahrenheit is " + temp_inF);


//***** exercise4 ******//

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 -> since they are both number values that will be added
    // ..to each other so normal addition = 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 since a is not a const value, so when we define it again it will be overwritten
    //.. so the new value of a now will be 2 so 2 +21 = 23
    // Actual: 23

    // 1. 55
    // 2. 23
    // 3. c was not defined so there is no value for it, only the address is defined.
    //4. console.log(3 + 4 + '5'); 
    // -> since 3 + 4 are number they will add up to 7 but 5 is a character so it will NOT
    // .. be added as a number it will be added as a char to the sentence.  

    console.log(3 + 4 + '5'); 


//***** exercise5 ******//

typeof(15)
// Prediction: number -> 15
// Actual: number 

typeof(5.5)
// Prediction: float /number -> 5.5
// Actual:number

typeof(NaN)
// Prediction: undefined 
// Actual: number

typeof("hello")
// Prediction: string
// Actual:string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: cannot - two strings
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: undefined
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: undefined
// Actual:NaN

99 * "hello"
// Prediction: undefined
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false


//***** exercise6 ******//


5 + "34"
// Prediction: '534'
// Actual: '534'

5 - "4"
// Prediction: NaN -> I thought it would give an error because its a number and a string.
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  " -> 2 spaces
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: true
// Actual: 1

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN 


































