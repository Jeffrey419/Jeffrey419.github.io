//local storage stuff
if (typeof(storage) != undefined) {
if (!localStorage.moneys) {localStorage.moneys = 10;}
if (!localStorage.AmountOfNormalBalls) {localStorage.AmountOfNormalBalls = 0;}
} else {alert('your browser does not support webstorage');}


//variables
var money = localStorage.moneys;
var Normalballs = [];
var AmountOfNormalBalls = localStorage.AmountOfNormalBalls;


//store, place to buy stuff
document.getElementById("Money").innerHTML = "$" + money;
document.getElementById("Money").style.fontSize = "10vh";
