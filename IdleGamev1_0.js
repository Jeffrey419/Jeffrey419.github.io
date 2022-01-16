//variables
var x = 0;
var opacity = 0;
var messageNumber = 0;
var talk1 = ["Hello", "Welcome to idle ball", "Enjoy"];
var lol = 1;
var done = 1;
var messageDone = false;


var beginningMessage = setInterval(function() {
	document.getElementById("talk").innerHTML = talk1[messageNumber];
	if (opacity >= 0 && lol == 0) {opacity -= 0.001}
	if (opacity <= 1 && lol == 1) {opacity += 0.001; done = 0;}
	if (opacity <= 0) {lol = 1;}
	if (opacity >= 1) {lol = 0}
	if (done != 1 && opacity <= 0) {messageNumber++; done = 1;}
	document.getElementById("talk").style.opacity = opacity;
	checkMessageDone()
	if (messageNumber == 1) {document.getElementById("talk").style.fontSize = "10vw"} else{
	document.getElementById("talk").style.fontSize = "20vw"}
	}, 3);
	

function checkMessageDone() {
	if (opacity <= 0 && messageNumber == talk1.length) {clearInterval(beginningMessage)}
	messageDone = true;
}
	

