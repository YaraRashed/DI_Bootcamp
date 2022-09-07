//ex1 

//1 
// in the console
let body = document.body;
let divElement = body.children[0];
console.log(divElement);


// 2 

let ul1 = body.children[1];

let p = ul1.children[1];
p.textContent = "Richard";

//3 

// let uls = body.getElementsByTagName('ul')[0];
    let ul11 = body.getElementsByClassName('list')[0];
    ul11.textContent = "Yara";

    let ul22 = body.getElementsByClassName('list')[1];
    ul22.textContent = "Yara";
console.log(ul11);
// uls[0].textContent = "Yara";
// uls.children[0].textContent = "Yara";
