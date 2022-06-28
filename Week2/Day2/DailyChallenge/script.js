let sentence = "This dinner is not that bad ! You cook well";

let wordNot = sentence.indexOf("not");
console.log(wordNot);

let wordBad = sentence.indexOf("bad");
console.log(wordBad);


if(wordBad > wordNot && wordNot != -1){
	let x = sentence.slice(0,wordNot);
	let y = sentence.slice(wordBad+3);
	let newsentence = x + " good " + y;
	console.log(newsentence);
	}
else {
	console.log(sentence);
}
	