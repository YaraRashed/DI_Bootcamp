//**** exercise1 ****//

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//1.
fruits.splice(0,0);
console.log(fruits);
//2.
console.log(fruits.sort());
//3. 
fruits.push("Kiwi");
console.log(fruits);

//4. 

for (let i=0 ; i<fruits.length; i++){
	if(fruits[i]=="Apples"){
		fruits.splice(i,1);
	}
}

//5.
console.log(fruits.reverse());



//**** exercise2 ****//

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);



