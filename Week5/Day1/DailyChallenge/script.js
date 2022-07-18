let form = document.getElementById("userform");

form.addEventListener("submit", callbackFunction);
function callbackFunction(event) {
    let input1 = event.target.elements.firstname.value;
    let input2 = event.target.elements.lastname.value;

    let obj ={
        firstname:input1,
        lastname:input2,
    }
    const jsonStr = JSON.stringify(obj);
    let para = document.createElement("p");
    let txt = document.createTextNode(jsonStr);
    para.appendChild(txt);
    document.body.appendChild(p);
}

form.addEventListener("submit",callbackFunction);