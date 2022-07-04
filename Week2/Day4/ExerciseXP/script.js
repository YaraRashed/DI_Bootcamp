//*** exercise1
//PART I 

function infoAboutMe(){
	console.log("My name is Yara, I'm 24, I like coffee");
}

infoAboutMe();

// PART II 

function infoAboutPerson(personName, personAge, personFavoriteColor){

	let s = `Your name is ${personName} , you are ${personAge} years old, your favorite color is ${personFavoriteColor}`;
	console.log(s);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");



//*** exercise2

function calculateTip(){
	let a = Number(prompt("What's the amount of your bill?"));
	let tip;
	if(a<50){
		tip = a*0.2;
		a += tip;
		let s = `Your tip amount is ${tip} and your final bill+tip is ${a}`;
		console.log(s);		
	}
	else if(a>50 && a<200){
		tip = a*0.15;
		a += tip;
		let s = `Your tip amount is ${tip} and your final bill+tip is ${a}`;
		console.log(s);	
	}
	else if(a>=200){
		tip = a*0.1;
		a += tip;
		let s = `Your tip amount is ${tip} and your final bill+tip is ${a}`;
		console.log(s);	
	}
}
calculateTip();

//*** exercise3


function isDivisible(){
	console.log("Outcome: ");
	let sum =0;
		for(let i=0;i<=500;i++){		
			if(i%23==0){
				sum += i;
				console.log(i);
			}
		}
	console.log("Sum : " +sum);	
}

isDivisible();

	//**BONUS 

function isDivisible(num){
	console.log("Outcome of all numbers divisible by "+ num +" :");
	let sum =0;
		for(let i=0;i<=500;i++){		
			if(i%num==0){
				sum += i;
				console.log(i);
			}
		}
	console.log("Sum : " +sum);	
}

isDivisible(3);
isDivisible(45);


//*** exercise4


let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange","apple"];
function myBill(){
			let sum=0;
	for(let x in shoppingList){
		for(let y in stock){
		if(shoppingList[x]===y && stock[y]!=0){
			sum+=prices[y];
			stock[y]--;
		}
	}

	}
		console.log("The sum of the items you have in your shopping list is: " +sum);
}
myBill();

//*** exercise5 

function changeEnough(itemPrice, amountOfChange){
	let sum=0;
		amountOfChange[0] *= 0.25;
		amountOfChange[1] *= 0.10;
		amountOfChange[2] *= 0.05;
		amountOfChange[3] *= 0.01;
		for(let i=0;i<amountOfChange.length;i++){
			sum+= amountOfChange[i];
		}
		if(sum>itemPrice){
			console.log("true");
		}
		else {
			console.log("false");
		}

}
changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]) ;



// *** exercise6

function hotelCost(){
	let sum=140;
	let num_of_nights;	
	do{
		num_of_nights = Number(prompt("Please enter the number of nights that you like to stay in the hotel: "));
		sum *= num_of_nights;


	} while(isNaN(num_of_nights))


	console.log("The hotel cost is: "+sum + "$"); 
	}

// hotelCost();


function planeRideCost(){
	let destination;

	do{
		destination = prompt("Please enter your destination: ");
		switch(destination){
		case "paris":
			console.log("The plane ticket cost is: 220$");
			break;
		case "london":
			console.log("The plane ticket cost is: 183$");
			break;
		case "dubai":
			console.log("The plane ticket cost is: 280$");
			break;
		default :
			console.log("The plane ticket cost is: 300$");
		}
	} while(!isNaN(destination) || destination==="")
}
// planeRideCost();


function rentalCarCost(){
	let num_of_days = 1;

	do{
		num_of_days = Number(prompt("Please enter the number of days that you'd like to rent a car: "));
		if(num_of_days<10){
			num_of_days *= 40;
			console.log("Your car rental total is " + num_of_days+ "$");
		}
		else {
			num_of_days *= 38;
			console.log("You get a discount :)! Your rental total is " + num_of_days+ "$");
		}

	} while(isNaN(num_of_days))
}
// rentalCarCost();

function totalVacationCost(){
	hotelCost();
	planeRideCost();
	rentalCarCost();
}

totalVacationCost();



















































