//local storage set
localStorage.removeItem("moneys")//remember to remove
if (typeof(storage) != undefined) {
	if (!localStorage.moneys) {localStorage.moneys = 0}
} else {alert("your browser does not support web storage")}


//variables
var money = Number(localStorage.moneys);
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var stats = document.getElementById("stats");
var speedStat = document.getElementById("speedStat");
var numberStat = document.getElementById("numberStat");
var otherStat = document.getElementById("otherStat");
var topDiv = document.getElementById("TopDiv");
var content = document.getElementById("content");
var tillTick = document.getElementById("tick");
var tillTickTime = 3;
var autoSave = document.getElementById("autoSave");
var tillAutoSave = 5;


//setting html elements
stats.style.width = winWidth*(1.95/10) + "px";
stats.style.height = winHeight*(89.5/100) + "px";
TopDiv.style.width = winWidth + "px";
TopDiv.style.height = winHeight*(10/100) + "px";
TopDiv.style.top = 0;
TopDiv.style.left = 0;
content.style.width = winWidth*(8/10) + "px";
content.style.height = winHeight*(89.5/100) + "px";
content.style.top = winHeight*(-89.5/100) + "px";
content.style.left = winWidth*(2/10) + "px";


//functions
function timeTillTick() {
	tillTickTime -= 0.1;
	if (tillTickTime <= 0) {tillTickTime = 3
	}
	tillTick.innerHTML = tillTickTime.toFixed(1) + " seconds till next tick";
}

function timeTillAutoSave() {
	tillAutoSave -= 0.1;
	if (tillAutoSave <= 0) {
		tillAutoSave = 5;
		localStorage.moneys = money;
		}
	autoSave.innerHTML = tillAutoSave.toFixed(1) + " seconds till autosave";
}

function increaseMoney() {
	money += 1;
}

function updateWindow() {
	document.getElementById("AmountOfMoney").innerHTML = "$" + money;
}

//intervals
setInterval(timeTillTick, 100);
setInterval(timeTillAutoSave, 100);
setInterval(updateWindow);

