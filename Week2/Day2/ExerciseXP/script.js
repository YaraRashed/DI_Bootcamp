//**** exercise1 ****//

let x = 10;
let y = 20;
if(x>y){
	console.log("x is bigger than y");
}
else console.log("y is bigger than x");

//**** exercise2 ****//

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if(newDog == "Chihuahua")
{
	console.log("I love Chihuahuas, it’s my favorite dog breed");
}
else console.log("I dont care, I prefer cats");

//**** exercise3 ****//

let userInput = Number(prompt("Please enter a number: "));
if(userInput%2 ==0)
{
	console.log("x is an even number");
}
else console.log("x is an odd number");


//**** exercise4 ****//

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length);

if(users.length == 0)
{
	console.log("no one is online");
}
else if(users.length == 1){
	console.log(users[0] + " is online");
}
else if(users.length == 2){
	console.log(users[0] +" and " + users[1] + " are online");
}

else {
	console.log(users[0] + " and " + users[1] + " and " + (users.length-2) + " more are online");

}
























