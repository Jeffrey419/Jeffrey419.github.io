if (typeof(storage) != undefined) {
	if (!localStorage.timePoints) {localStorage.timePoints = 0}
	if (!localStorage.timetimePoints) {localStorage.timetimePoints = 0}
	if (!localStorage.timetimetimePoints) {localStorage.timetimetimePoints = 0}
	if (!localStorage.askDifficulty) {localStorage.askDifficulty = 0}
} else {alert("your browser does not support web storage")}

var tp = Number(localStorage.timePoints);
var ttp = Number(localStorage.timetimePoints);
var tttp = Number(localStorage.timetimetimePoints);
var tta = 5;

function TimePoints() {
	tp -= 99999;
}

function ShowStats() {
	document.getElementById("Time").innerHTML = "time points: " + tp;
	document.getElementById("Time2").innerHTML = "time points: " + ttp;
	document.getElementById("Time3").innerHTML = "time points: " + tttp;
}

function AutoSave() {
	localStorage.timePoints = tp;
	localStorage.timetimePoints = ttp;
	localStorage.timetimetimePoints = tttp;
}

function TimeTillAutoSave() {
	document.getElementById("tta").innerHTML = "Autosave in: " + tta.toFixed(1) + " seconds";
	tta -= 0.1;
	if (tta <= 0.0) {tta = 5}
}

function convert1() {
	if (tp > 0) {
	tp -= 1;
	ttp += 1;
	}
}

function convert2() {
	if (ttp > 0) {
	ttp -= 1;
	tttp += 1;
	}
}

//Intervals
setInterval(TimeTillAutoSave, 100);
setInterval(AutoSave, 5000);
setInterval(ShowStats);
setInterval(TimePoints, 10);