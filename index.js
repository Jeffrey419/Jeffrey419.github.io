let version = {'number': '0.00.07', 'type': 'beta'}
let widgets = {
	'homePage': true,
	'games': false,
	'war': false,
}
let timeSpent = {
	'hour': 0,
	'minute': 0,
	'second': 0,
	'decisecond': 0
}

let messageOne = {'myWish': false, 
				  'callToArms': false}

function init() {
	if (!localStorage.time) {localStorage.time = '00:00:00:00'}
	if (!localStorage.messageOne) {localStorage.messageOne = 'false-false'}
	let timeAry = localStorage.time.split(':')
	for (let i = 0; i<Object.keys(timeSpent).length; i++) {
		timeSpent[Object.keys(timeSpent)[i]] = Number(timeAry[i])
	}
	messageOne = localStorage.messageOne.split('-')
	let messageOneSupport = {'myWish': messageOne[0], 'callToArms': messageOne[1]}
	messageOne = messageOneSupport
	widgetHandlers()
	document.getElementById('version').innerHTML = 'version ' + version['number'] + ' ' + version['type']
	console.log(messageOne)
}

function widgetLoad(widget) {
	for (let i in widgets) {
		document.getElementById(i.replace(/ /g, '')).style.display = 'None'
		widgets[i] = false
	}
	widgets[widget] = true
	widget = widget.replace(/ /i, '')
	document.getElementById(widget).style.display = 'inline-block'
}

function widgetHandlers() {
	for (let i in widgets) {
		if (!document.getElementById(i + 'Handler')) {
			let widgetWidth = document.getElementById('mainNavBar').offsetWidth/Object.keys(widgets).length
			var widget = document.createElement('SPAN')
			var widgetText = document.createElement('P')
			widget.style.width = widgetWidth
			widget.id = i + 'Handler'
			if (i == 'war' && messageOne['callToArms'] == 'false') {widgetText.innerText = 'nothing to see here'}
			else {widgetText.innerText = i}
			widget.onmouseover = function(){this.classList.add('widgetHandlerOver')}
			widget.onmouseout = function(){this.classList.remove('widgetHandlerOver')}
			widget.classList.add('widgetHandler')
			widget.onclick = function(){widgetLoad(i);}
			widgetText.classList.add('widgetHandlerText')
			widget.appendChild(widgetText)
			document.getElementById('mainNavBar').appendChild(widget)
			console.log(widget.id)
		} else {
			let widgetWidth = document.getElementById('mainNavBar').offsetWidth/Object.keys(widgets).length
			document.getElementById(i + 'Handler').style.width = widgetWidth
			document.getElementById(i + 'Handler').id = i + 'Handler'
			if (i == 'war' && messageOne['callToArms'] == 'false') {document.getElementById(i + 'Handler').firstChild.innerText = i}
			else {document.getElementById(i + 'Handler').firstChild.innerText = i}
			document.getElementById(i + 'Handler').onmouseover = function(){this.classList.add('widgetHandlerOver')}
			document.getElementById(i + 'Handler').onmouseout = function(){this.classList.remove('widgetHandlerOver')}
		}
	}
	for (let i in widgets) {
		if (widgets[i] == true) {
			document.getElementById(i + 'Handler').classList.add('active')
		} else {
			document.getElementById(i + 'Handler').classList.remove('active')
		}
	}
}

function specialWidgets() {
	if (widgets['games'] == true) {
		location.replace = 'games.html'
		document.getElementById('showInNewTab').onclick = function() {window.open('games.html')}
	}
}

function timeSpentUpdate() {
	document.getElementById('timeSpent').innerHTML = 'time spent - ' + timeSpent['hour'] + ':' + timeSpent['minute'] + ':' + timeSpent['second'] + ':' + timeSpent['decisecond'];
	timeSpent['decisecond'] += 1;
	if (timeSpent['decisecond'] >= 100) {
		timeSpent['decisecond'] -= 100
		timeSpent['second'] += 1
	}
	if (timeSpent['second'] >= 60) {
		timeSpent['second'] -= 60
		timeSpent['minute'] += 1
	}
	if (timeSpent['minute'] >= 60) {
		timeSpent['minute'] -= 60
		timeSpent['hour'] += 1
	}
	setTimeout(timeSpentUpdate, 10);
}

function store() {
	if (localStorage.time) {localStorage.time = timeSpent['hour'] + ':' + timeSpent['minute'] + ':' + timeSpent['second'] + ':' + timeSpent['decisecond']}
	else {localStorage.time = '00:00:00:00'}
	if (localStorage.messageOne) {localStorage.messageOne = messageOne['myWish'] + '-' + messageOne['callToArms']}
	else {localStorage.messageOne = 'false-false'}
}

function oneTimeMessages() {
	if (messageOne['myWish'] == 'false') {
		alert("Can you please stay here for 2 minutes please? It's not like anything bad will happen to you and please don't go to the 'nothing here to see' part of the website")
		messageOne['myWish'] = true
	}
	if (messageOne['callToArms'] == 'false' && timeSpent['minute'] >= 2) {
		alert('CALL TO ARMS, WE ARE GOING TO WAR')
		messageOne['callToArms'] = true
	}
}

setInterval(store, 500)
setInterval(specialWidgets, 100)
setInterval(oneTimeMessages, 100)
setInterval(widgetHandlers, 100)
setTimeout(timeSpentUpdate, 10)
init()
