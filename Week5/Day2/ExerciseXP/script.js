let container = document.getElementById("results");
let xhr = new XMLHttpRequest();

const setRequest = (function(){
    xhr.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    xhr.send();
}) 

const loadData = function (){
    if(xhr.status != 200){
        console.log("error loading request");
    } else{
        console.log(xhr.response);
        // displayData(xhr.response);
    }

}

const displayData = function(data){
    console.log(data);
}
loadData();

// xhr.addEventListener("load", loadData);