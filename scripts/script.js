// JavaScript Document

// Javascript code voor hamburger menu waar isabel kok me mee heeft geholpen
var hamburgeropen = document.querySelector('nav:first-of-type ul li:nth-of-type(4) img');
var sluit = document.querySelector('.hamburger img:first-of-type');
var menu = document.querySelector('.hamburger');const main = document.querySelector("main");

//Button klik sound
// var klik = new Audio("audio/klik.mp3");
// var buttonKlik = document.querySelector("buttonklik")
    // const audio = new audio("audio/klik.mp3");
    // audio.src = "./klik.mp3";
// NIET GELUKT UITEINDELIJK

// Dit stukje javascript over observer is geschreven door Nina Vens de studentenassistent
// Nina heeft mij geholpen het probleem dat de footer mee bleef plakken op de homepagina
// bij het scrollen, deze javascript zorgt ervoor dat je alleen kan scrollen
// als de footer niet in beeld is alleen dan zal de overflow in werking zijn.
const observer = new IntersectionObserver(

    (entries) => {

    //NO intersection

    if (!entries[0].isIntersecting) {

        main.classList.remove("overflow");

    }

    //YES intersection

    else {

        main.classList.add("overflow");

    }

},

{ threshold: [0] });



observer.observe(document.querySelector("#observer"));

function openmenu(){
    menu.classList.add('open')
}
function sluitmenu(){
    menu.classList.remove('open')
}

hamburgeropen.addEventListener('click', openmenu);
sluit.addEventListener('click', sluitmenu);
