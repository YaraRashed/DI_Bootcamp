// //**** exercise1 ****//



let userin= (prompt("What language do you speak?")).toLowerCase();

switch(userin){
	case "english":
		console.log("Hello");
		break;
	case "french":
		console.log("Bonjour");
		break;
	case "hebrew":
		console.log("Shalom");
		break;
	case "spanish":
		console.log("Hola");
		break;
	case "arabic": 
		console.log("Marhaba");
		break;
	default:
		console.log("01110011 01101111 01110010 01110010 01111001");

}

// //**** exercise2 ****//

let user_grade = Number(prompt("Enter your grade: "));

if(user_grade > 90){
	console.log("A");
}
else if(user_grade > 80 && user_grade <= 90){
	console.log("B");
}
else if(user_grade >= 70 && user_grade <=80 ){
	console.log("C");
} 
else if(user_grade < 70){
	console.log("D");
}


// //**** exercise3 ****//

let verb = prompt("Enter a verb: ");
let x = verb.slice(verb.length-3);
let y = verb.slice(verb.length-3);

console.log("The string is: " + verb);

if( (verb.length>3) && (y!="ing") ){
	console.log(verb + "ing");
}
else if(verb.length>3 && x === "ing" ){
	console.log(verb + "ly");
}
else if(verb.length <3){
	console.log(verb);
}

















