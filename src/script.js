
let url = "https://kirillsbarsukov.github.io/JSONLab/src/json.json";
let request = new XMLHttpRequest();

request.open("GET", url);

request.responseType = 'json';
//test
request.send();

request.onload = function() {
    let wierdStuff = request.response; 
    console.log(wierdStuff);
}