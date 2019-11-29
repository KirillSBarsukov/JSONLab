
let url = "https://kirillsbarsukov.github.io/JSONLab/src/json.json";
let request = new XMLHttpRequest();
let header = document.querySelector('header');

request.open("GET", url);

request.responseType = 'json';

request.send();

request.onload = function() {
    let wierdStuff = request.response; 
    console.log(wierdStuff);
    loadProducts(wierdStuff);
}

function loadProducts (jsonObject) {
    let h1element = document.createElement('h1'); 
    console.log(jsonObject[0]["title"])
    h1element.textContent = jsonObject['title']
    header.appendChild(h1element);;
}
