if (typeof(Storage) !== 'undefined') {
	if(!localStorage.day) {localStorage.day = 1}
	if(!localStorage.hour) {localStorage.hour = 0}
	if(!localStorage.money) {localStorage.money = 0}
	if(!localStorage.income) {localStorage.income = 3}
} else {
	alert('your data will not be autosaved because your browser does not support web storage')
}

const IDLE = document.querySelector('#idle')
const stat = document.querySelector('#stats')
let hour = Number(localStorage.hour)
let day = Number(localStorage.day)
var money = Number(localStorage.money)
let income = Number(localStorage.income)

function updateIdle() {
	document.getElementById('time').innerHTML = 'day: ' + day + ", hour: " + hour
	document.getElementById('income').innerHTML = 'money: ' + money + " (+" + income + ')'
}

function updateTime2() {
	hour += 1
	if (hour >= 8 && hour < 17 && day%6 != 0 && day%7 != 0) {
	money += income
	workSpeed = 1
	workStrength = 0.25
	} else {
		workSpeed = 0
		workStrength = 0
	}
	if (hour >= 24) {
		hour = 0
		day += 1
	}
}
setInterval(updateTime2, 500)
