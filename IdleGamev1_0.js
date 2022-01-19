//local storage stuff
if (typeof(storage) != undefined) {
if (!localStorage.moneys) {localStorage.moneys = 10;}
} else {alert('your browser does not support webstorage');}


//variables
var money = localStorage.moneys;


//store, place to buy stuff
document.getElementById("Money").innerHTML = money;
document.getElementById("Money").style.fontSize = "20vh";
