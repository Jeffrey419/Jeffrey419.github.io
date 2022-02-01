//local storage set
localStorage.removeItem("moneys")//remember to remove
localStorage.removeItem("woodAxe")//remember to remove
if (typeof(storage) != undefined) {
	if (!localStorage.moneys) {localStorage.moneys = 0}
	if (!localStorage.days) {localStorage.days = 1}
	if (!localStorage.shop) {localStorage.shop = false}
	if (!localStorage.getMats) {localStorage.getMats = false}
	if (!localStorage.woodAxe) {localStorage.woodAxe = false}
} else {alert("your browser does not support web storage")}


//local Storage variables
var money = Number(localStorage.moneys);
var day = Number(localStorage.days);


//id variables
var stats = document.getElementById("stats");
var speedStat = document.getElementById("speedStat");
var numberStat = document.getElementById("numberStat");
var otherStat = document.getElementById("otherStat");
var topDiv = document.getElementById("TopDiv");
var content = document.getElementById("content");
var tillTick = document.getElementById("tick");
var getMats = document.getElementById("getMaterials");
var build = document.getElementById("build");
var shop = document.getElementById("shop");
var prestige = document.getElementById("prestige");
var sellDestroy = document.getElementById("sellDestroy");
var asension = document.getElementById("asension");
var investment = document.getElementById("investment");
var learn = document.getElementById("learn");
var moreMoney = document.getElementById("earnMoreMoney");
var autoSave = document.getElementById("autoSave");
var person = document.getElementById("person");
var blocks = []


//classes variables
var switchers = document.getElementsByClassName("switchers");


//other variables
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var tillTickTime = 3;
var tick = 0;
var tillAutoSave = 5;



//initiation
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
for (i=0; i < switchers.length; i++) {
	switchers[i].style.fontSize = winWidth*(2.2/100) + "px";
	switchers[i].style.marginLeft = winWidth*(0.75/100) + "px";
	switchers[i].style.marginRight = winWidth*(0.75/100) + "px";
}


//functions
function timeTillTick() {
	tillTickTime -= 0.1;
	if (tillTickTime <= 0) {
		tillTickTime = 3;
		tick += 1;
	}
	if (tick >= 24) {
		tick = 0;
		day += 1;
	}
	tillTick.innerHTML = tillTickTime.toFixed(1) + " seconds till next tick";
}

function timeTillAutoSave() {
	tillAutoSave -= 0.1;
	if (tillAutoSave <= 0) {
		tillAutoSave = 5;
		localStorage.moneys = money;
		localStorage.days = day;
		}
	autoSave.innerHTML = tillAutoSave.toFixed(1) + " seconds till autosave";
}

function increaseMoney() {
	money += 1;
}

function updateWindow() {
	document.getElementById("day").innerHTML = "day " + day;
	document.getElementById("AmountOfMoney").innerHTML = "$" + money;
	if (localStorage.woodAxe == "true") {
		document.getElementById("buyWoodAxe").style.display = 'none';
	}
}

function seperators() {
	if (money >= 30||localStorage.shop == 'true') {shop.innerHTML = 'shop'; localStorage.shop = true;}
	if (localStorage.woodAxe == 'true'||localStorage.getMats == 'true') {getMats.innerHTML = 'get Materials'; localStorage.getMats = true;}
}

function switchContent(show, whichOne) {
	if (document.getElementById(whichOne).innerHTML != 'locked') {
	document.getElementById('getMatsContent').style.display = 'none';
	document.getElementById('buildContent').style.display = 'none';
	document.getElementById('shopContent').style.display = 'none';
	document.getElementById('sellDestroyContent').style.display = 'none';
	document.getElementById('investmentContent').style.display = 'none';
	document.getElementById('learnContent').style.display = 'none';
	document.getElementById('earnMoreMoneyContent').style.display = 'none';
	document.getElementById('prestigeContent').style.display = 'none';
	document.getElementById('asensionContent').style.display = 'none';
	document.getElementById(show).style.display = 'block';
	document.getElementById(show).style.width = '100%';
	document.getElementById(show).style.height = '100%';
	}
}

function buyWoodAxe() {
	if (money >= 45) {
		money -= 45;
		localStorage.woodAxe = true;
	} else {
		alert("not enough money");
	}
}

document.onkeydown = move;
function move(e) {
	rightBoundry = document.getElementById('getMatsContent').offsetWidth;
	BottomBoundry = document.getElementById('getMatsContent').offsetHeight;
	TopBoundry = document.getElementById('getMatsContent').offsetTop;
	e = e.key;
	personXpos = person.offsetLeft;
	personYpos = person.offsetTop;
	speed = 10;
	if (document.getElementById("getMatsContent").style.display != 'none') {
	if (e == 'ArrowRight'||e == 'd'||e == 'D') {
		personXpos += speed;
		if (personXpos+person.offsetWidth > rightBoundry) {
			personXpos -= speed;
		}
	}
	if (e == 'ArrowLeft'||e == 'a'||e == 'A') {
		personXpos -= speed;
		if (personXpos < 0) {
			personXpos += speed;
		}
	}
	if (e == 'ArrowUp'||e == 'w'||e == 'W') {
		personYpos -= speed;
		if (personYpos < TopBoundry) {
			personYpos += speed;
		}
	}
	if (e == 'ArrowDown'||e == 's'||e == 'S') {
		personYpos += speed;
		if (personYpos+person.offsetHeight > BottomBoundry) {
			personYpos -= speed;
		}
	}
	person.style.left = personXpos + 'px';
	person.style.top = personYpos + 'px';
	}
}

function initiation() {
	if (document.getElementById("getMatsContent").style.display != 'none') {
		TotalArea = document.getElementById('getMatsContent').offsetHeight * document.getElementById('getMatsContent').offsetWidth;
		AreaOfEachSquare = TotalArea/450;
		lengthOfEachSquare = Math.sqrt(AreaOfEachSquare)
		xPos = 0;
		yPos = document.getElementById('getMatsContent').offsetTop;
		for (m=yPos; m<document.getElementById('getMatsContent').offsetHeight; m+=lengthOfEachSquare) {
			for (i=0; i<document.getElementById('getMatsContent').offsetWidth; i+=lengthOfEachSquare) {
			blocks[blocks.length] = {
				what: document.createElement('SPAN'),
				backgroundColor: 'lightGreen',
			}
			blocks[blocks.length-1].what.style.position = 'absolute';
			blocks[blocks.length-1].what.style.width = lengthOfEachSquare + 'px';
			blocks[blocks.length-1].what.style.height = lengthOfEachSquare + 'px';
			blocks[blocks.length-1].what.style.backgroundColor = blocks[blocks.length-1].backgroundColor;
			blocks[blocks.length-1].what.style.top = yPos + 'px';
			blocks[blocks.length-1].what.style.left = xPos + 'px';
			document.getElementById('getMatsContent').appendChild(blocks[blocks.length-1].what);
			xPos += lengthOfEachSquare;
			}
			xPos = 0;
			yPos += lengthOfEachSquare;
		}
		}
	}
	
function whatBlockOn() {
	for (i=0;i<blocks.length;i++) {
			blocks[i].what.onmouseover = function() {
			console.log('lol');
			blocks[i].what.style.zIndex = '5';
			blocks[i].what.style.border = '5px silver solid';

		}
		blocks[i].what.onmouseout = function() {
			blocks[i].what.style.border = 'none';
			blocks[i].what.style.zIndex = '1';
		}
	}
}


//intervals and timeouts
setInterval(timeTillTick, 100);
setInterval(timeTillAutoSave, 100);
setInterval(updateWindow);
setInterval(seperators);
setInterval(whatBlockOn);
