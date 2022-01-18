//local storage stuff
if (typeof(storage) != undefined) {
if (!localStorage.moneys) {localStorage.moneys = 10;}
} else {alert('your browser does not support webstorage');}


//variables
var money = localStorage.moneys;
var canvas = document.getElementById("ballCanvas");
var c = canvas.getContext('2d');
var AmountOfBalls = 0;


//settings


//store, place to buy stuff
document.getElementById("Money").innerHTML = money;


//canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.9;


//when ball is bought


//call function to create ball until ball number equals amount of balls bought


//create ball


// get ball to move


//other stuff
