/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var naamDoosje;
naamDoosje = "Nathan";
console.log(naamDoosje);



//TOGGLE PRIJS INDICATOR ----------------------------------------------
var clickButton = document.getElementById('prijs');
var veld = document.querySelectorAll('form');
console.log(veld[2]);

function show() {
    console.log("check");
    veld[2].classList.toggle('formPrijsShow');
}

clickButton.addEventListener('click', show);


//SLIDER INDICATOR ----------------------------------------------
var slider = document.getElementById("prijsIndicatie");
var output = document.getElementById("bedrag");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};


//TOGGLE DATE INDICATOR ----------------------------------------------

var clickButtonDatum = document.getElementById('datum');
var veldDatum = document.querySelectorAll('form');
console.log(veld[3]);

function showDatum() {
    console.log("check");
    veldDatum[3].classList.toggle('formDateShow');
}

clickButtonDatum.addEventListener('click', showDatum);




