// declare constants
const url = "https://kirillsbarsukov.github.io/JSONLab/src/json.json";
const urlImg = "https://kirillsbarsukov.github.io/JSONLab/img/";

let request = new XMLHttpRequest();
let header = document.querySelector('header');
let section = document.querySelector('section');


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
    h1element.style.textAlign = "center";
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
    const products = jsonObject['products'];
    for(let i = 0; i < products.length; i++){
        //create a few different elements 
        let article = document.createElement('article');
        article.style.backgroundColor = "beige";
        article.style.marginTop = "2rem";
        article.style.padding = "1rem";
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');
        console.log(products[i]['image'])
        img.setAttribute('src', urlImg + products);
        h2.textContent = products[i].productName;
        p1.textContent = products[i].description;
        p2.textContent = "$ " + products[i].price;
        
        let features = products[i].features;
        for(let k = 0; k < features.length; k++) {
          let listItem = document.createElement('li'); 
          listItem.textContent = features[k];
          list.appendChild(listItem); 
        }


        //article.appendChild(img); 
        article.appendChild(h2);
        article.appendChild(p1); 
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article); 
    }

}
