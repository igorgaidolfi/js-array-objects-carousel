const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const content = document.getElementById('content')
content.innerHTML = `<img src="./${images[0].image}" alt="">
<div class="position-absolute bottom-50 text-right color-white padding-text">
    <h2>${images[0].title}</h2>
    <h5>${images[0].text}</h5>
</div>`
// let img = document.createElement('images')
// const item = document.getElementById('zio')
// img.innerHTML = 'ciccio '
// zio.appendChild(img)
// let i=0
// while(i<images.length){
//     next.addEventListener("click", function(){

//     })    
// }

// for(let i=images.length; i>0;i--){
//     prev.addEventListener("click", function(){
//         console.log(images[i])
//     })
// }