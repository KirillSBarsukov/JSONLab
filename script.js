
let url = "https://raw.githubusercontent.com/KirillSBarsukov/JSONLab/master/json.json";
let request = new XMLHttpRequest();
request.open("GET", request);
request.responseType = 'json';
request.send();
request.onload = function() {
    let wierdStuff = request.response; 
    console.log(wierdStuff);
}