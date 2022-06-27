//**** exercise1 ****//


let sentence = ["my","favorite","color","is","blue"];
	sentence = sentence.join(" ");
	console.log(sentence);



//**** exercise2 ****//

let str1 = "mix";
let str2 = "pod";


let newstr1 = str1.slice(2);
let newstr2 = str2.slice(0,2);
let newstr11 = str1.slice(0,2);
let newstr22 = str2.slice(2);

let concat1 = newstr2+ newstr1+ " "+newstr11+newstr22;
console.log(concat1);


//**** exercise3 ****//

let num1 = Number(prompt("Please enter the first number:"));
let num2 = Number(prompt("Please enter the second number:"));
let msg ="Your sum is: " + Number(num1+num2);

alert(msg);






