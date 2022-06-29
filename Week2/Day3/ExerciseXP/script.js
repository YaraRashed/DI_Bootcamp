// //**** exercise1 ****//
// //PART I


// let people = ["Greg", "Mary", "Devon", "James"];

// //4 BEFORE changing the array
// let a = people.indexOf("Mary");
// console.log("Index of Mary before modifying the array is: " + a);


// for(let i in people)
// {
// 	if(people[i]=== "Greg"){ //1
// 		people.splice(i,i+1);
// 	}
// 	else if(people[i]==="James"){ //2
// 		people[i] = "Jason";
// 	}
// }

// people.push("Yara"); //3
// console.log(people);

// //4 
// let b = people.indexOf("Mary");
// console.log("Index of Mary after modifying the array is: " + b);

// //5

// // for(let i in people){
// // 	if(people[i]==="Mary" ){
// // 		let people1 = people.slice(i,i+1);
// // 		people += people1;
// // 	}
// // 	else if(people[i]==="Yara"){
// // 		let people2 = people.slice(i,i+1);
// // 		people += people2;
// // 	}
// // }
// // console.log(people);

// let people1 = people.slice(i,i+1);

// for(let i in people){
// 	if(people[i]==="Mary" || people[i]==="Yara"){
// 		people.splice(i,i+1);
// 	}
// }

// console.log(people);


// //6
// let c = people.indexOf("Foo");
// console.log(c); // -1 because Foo DNE inside the array. indexOf returns -1 is element not found.

// //7

// let last = people.indexOf((people[people.length-1]));
// console.log(last);
// // length is 1-the index of the array. 

// //PART II

// //1
// for(let y in people){
// 	console.log(people[y]);
// }

// //2
// for(let y in people){
// 	if(people[y]==="Jason"){
// 		console.log("Jason")
// 		break;
// 	}
// }


// **** exercise2 ****//

// let colors =["black","blue","green","beige","white"];
// let count =["1st" , "2nd" , "3rd" , "4th", "5th"];

// for(let i=0;i<colors.length;i++){

// 		console.log("My #"+ (i+1) + " choice is : "+ colors[i]);
// 	}


// **** exercise3 ****//

// ***input has to be casted to number because prompt inputs strings
// 	let num = Number(prompt("Enter a number: ")); 
// 	let a = typeof(num);
// 	console.log(a);

// let num;
// do {

// 	num = Number(prompt("Enter a number: "));
// } while (num < 10);

**** exercise4 ****//


let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building["numberOfFloors"]);
console.log("Number of floors in firstFloor: ");
console.log(building["numberOfAptByFloor"]["firstFloor"]);


console.log("Number of floors in thirdFloor: ");
console.log(building["numberOfAptByFloor"]["thirdFloor"]);

for(let x in building){
	if(building[x]==="nameOfTenants")
	{
		console.log(nameOfTenants[0]);
	}
}




// **** exercise5 ****//

// let family ={
// 	name : "Rashed",
// 	addess : "Jerusalem",
// 	favHobbie : "cooking",
// 	numOfMembers : 7
// };

// for(let a in family)
// {
// 	console.log(a);
// }

// for(let a in family)
// {
// 	console.log(family[a]);
// }

// **** exercise6 ****//

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// for(let i in details){
// 	console.log(i + " " + details[i]).join("\n");
// }

// **** exercise7 ****//


// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let first="";
// let second="";
// for(let l =0 ; l<names.length ; l++){
// 	if(l>=names.length/2){
// 		second += names[l][0];

// 	}
// 	else if(l<names.length/2)
// 	{
// 		first += names[l][0];
// 	}
// }
// console.log(second+first);







































