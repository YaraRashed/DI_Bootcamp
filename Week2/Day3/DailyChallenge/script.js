// let s="";

// for(let i=0;i<6;i++){
// 	s = "* ".repeat(i+1);
// 	console.log(s);
// }

let s = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    s += "* ";

  } 
  s+="\n";
}
console.log(s);