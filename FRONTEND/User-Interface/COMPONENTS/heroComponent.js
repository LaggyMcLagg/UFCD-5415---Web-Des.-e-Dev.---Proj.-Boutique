let imgList = [
    { image: src = "https://i.redd.it/it-looks-like-our-friend-is-on-some-copium-v0-pl131chhmai91.png?width=400&format=png&auto=webp&s=7fd910d453b71ae2b87b4e44d726177b982f3ef1" },
    { image: src = "https://preview.redd.it/flk5nq4qs9681.jpg?auto=webp&s=5b3d9e7d5c6a1560948f9aa8609b8eefcfcab3a8" },
    { image: src = "https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F64144-5f5d9b481fe5863c196d3441322ab983.jpeg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" },
]

let imgList2 = [
    { image: src = "https://i.redd.it/it-looks-like-our-friend-is-on-some-copium-v0-pl131chhmai91.png?width=400&format=png&auto=webp&s=7fd910d453b71ae2b87b4e44d726177b982f3ef1" },
    { image: src = "https://preview.redd.it/flk5nq4qs9681.jpg?auto=webp&s=5b3d9e7d5c6a1560948f9aa8609b8eefcfcab3a8" },
    { image: src = "https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F64144-5f5d9b481fe5863c196d3441322ab983.jpeg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" },
]

let currentIndex = 0;
let currentIndex2 = 1;

let imgHero = document.createElement("img");
let imgHero2 = document.createElement("img");

function Hero() {
    const divHero = document.getElementById('container');

    imgHero = document.createElement("img");

    imgHero.className = 'img1';

    imgHero.src = imgList[currentIndex].image;

    divHero.appendChild(imgHero)
}

function Hero2() {
    const divHero2 = document.getElementById('container');
    
    imgHero2 = document.createElement("img");

    imgHero2.className = 'img2 slide';

    imgHero2.src = imgList2[currentIndex2].image;

    divHero2.appendChild(imgHero2)

    console.log(imgList2.length)
}

Hero();

Hero2();

function changeImage() {
    currentIndex = (currentIndex + 1);
    
    
    if(currentIndex == imgList.length){
        currentIndex = 0;
    }
    
    imgHero.src = imgList[currentIndex].image;

}

function changeImage2() {
    currentIndex2 = (currentIndex2 + 1);
    
    
    if(currentIndex2 == imgList2.length){
        currentIndex2 = 0;
    }
    
    imgHero2.src = imgList2[currentIndex2].image;

}

setInterval(function() {
    changeImage();
    changeImage2();
}, 2000);
