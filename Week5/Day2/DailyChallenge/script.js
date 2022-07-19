 //CODE NOT WORKING - will work on it and resubmit
 
 
 
let form = document.getElementById("formID");

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", loadData);

const section = document.getElementById("container");

const buttonDeleteAll = document.createElement("button");
buttonDeleteAll.addEventListener("click", deleteAll);

 function retrieveFormData(event){
    event.preventDefault();
    // let inputGif = event.target.elements.gif;
    const inputGif = document.getelementbyID("gif").value;
    console.log(inputGif);
    request(inputGif);
 }

 function request(userIn){
    xhr.open("GET","https://api.giphy.com/v1/gifs/random?tag=${userIn}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    xhr.send();
    console.log(xhr);

    xhr.onload = function(){
        if(xhr.status === 200){
        console.log(xhr.response);
        const gifInputURL = xhr.response["data"]["images"]["original"]["url"];
        const sectionImg = document.createElement("div");
        const btnDelete = document.createElement("button");
        const txt = document.createTextNode("Delete GIF");
        btnDelete.appendChild(txt);
        btnDelete.addEventListener("click", deleteGif);
        // console.log(gifInputURL);
        let img = document.createElement("img");
        img.setAttribute("src", gifInputURL);
        section.appendChild(img);
        section.appendChild(sectionImg);


        }else{
            console.log("error displaying request");
        }

    }
  

 }
function deleteGif(event){
   const imgDiv=  event.target.parentElement;
   imgDiv.remove();


}

function deleteAll(){
    const sectionChild = section.children;
    for (let child in sectionChild){
        child.remove();
    }
}

 form.addEventListener("submit" , retrieveFormData);
