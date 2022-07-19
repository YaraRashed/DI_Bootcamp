 //CODE NOT WORKING - will work on it and resubmit
 
 
 
 let form = document.getElementById("formID");
 form.addEventListener("submit" , retrieveFormData);

 function retrieveFormData(event){
    event.preventDefault();
    let inputGif = event.target.elements.gif;
    request(inputGif.value);
 }

 function request(userIn){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.giphy.com/v1/gifs/random?tag=${gif}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function(){
        if(xhr.status === 200){
        console.log(xhr.response);
        let gifInputURL = xhr.response["data"]["images"]["original"]["url"];
        // console.log(gifInputURL);
        let section = document.getElementById("container");
        let img = document.createElement("img");
        img.setAttribute("src", gifInputURL);
        section.appendChild(img);


        }else{
            console.log("error displaying request");
        }

    }
  

 }

