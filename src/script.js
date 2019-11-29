
let url = "https://kirillsbarsukov.github.io/JSONLab/src/json.json";
let request = new XMLHttpRequest();
let header = document.querySelector('header');

request.open("GET", url);

request.responseType = 'json';

request.send();

request.onload = function() {
    let wierdStuff = request.response; 
    console.log(wierdStuff);
    loadTitles(wierdStuff);
    loadProducts(wierdStuff);
}

const loadTitles = (jsonObject) => {
    let h1element = document.createElement('h1'); 
    let h3element = document.createElement('h3'); 
    let paragraph = document.createElement('p'); 
    paragraph.textContent = jsonObject['date']
    h3element.textContent = jsonObject['website'];
    h1element.textContent = jsonObject['title']

    header.appendChild(h1element);
    header.appendChild(h3element);
    header.appendChild(paragraph);
}

function loadProducts (jsonObject) {


}
