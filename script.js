/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var naamDoosje;
naamDoosje = "Nathan";
console.log(naamDoosje);

var clickButton = document.getElementById('prijs');
var veld = document.querySelectorAll('form');
console.log(veld[2]);

function show() {
    console.log("check");
    veld[2].classList.toggle('subFormShow');
}

clickButton.addEventListener('click', show);
