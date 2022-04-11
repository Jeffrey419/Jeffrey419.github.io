const canvas = document.querySelector('#factory');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let switchButtons = document.querySelectorAll('#switcher button')
let switchBtnLength = switchButtons.length
let areaOfBtn, btnFontSize, old, numberFalse;
let workSpeed = workStrength = 0;
let stamina = willpower = 100;
let modes = {idle:true, 
			 factory:false, 
			 farm:false, 
			 adventure:false, 
			 getBetter:false,
			 store: false}
modes.idle = true
modes.factory = modes.farm = modes.adventure = modes.getBetter = false

function enable(what) {
	numberFalse = 0
	for (let i = 0; i < Object.keys(modes).length; i++) {
		if (modes[Object.keys(modes)[i]] == true) {
			old = i
		}
		modes[Object.keys(modes)[i]] = false
		if (what == Object.keys(modes)[i] && !document.getElementById(Object.keys(modes)[i]).classList.contains('locked')) {
			modes[Object.keys(modes)[i]] = true
		}
		if (!modes[Object.keys(modes)[i]] == true) {
			numberFalse += 1
		}
	}
	if (numberFalse == Object.keys(modes).length) {
		modes[Object.keys(modes)[old]] = true
	}
}

function update() {
	console.log(stamina + '    ' + willpower)
	if (stamina < 100 && workSpeed == 0 && workStrength == 0) {
		stamina += 0.01
	} else {
		stamina -= workSpeed*workStrength
	}
	if (willpower < 100) {
		willpower += 0.1
	} 
	if (stamina < 50 && workSpeed != 0 && workStrength != 0) {
		willpower -= 0.6 - stamina/100
	}
	if (stamina < 0) {
		stamina = 0
	}
	if (willpower < 0) {
		willpower = 0
	}
	document.getElementById('willPowerBar').style.width = willpower + '%'
	document.getElementById('staminaBar').style.width = stamina + '%'
	requestAnimationFrame(update)
	c.clearRect(0, 0, canvas.width, canvas.height)
	areaOfBtn = outerWidth * outerHeight/10
	switchButtons.forEach((btn)=>{
		btnFontSize = areaOfBtn/(5500*devicePixelRatio)
		btn.style.fontSize = btnFontSize + 'px'
	})
	
	for (let i = 0; i < document.getElementById('switcher').childElementCount; i++) {
		document.getElementById('switcher').children[i].style.width = 100/document.getElementById('switcher').childElementCount + '%'
	}
	
	for (let i = 0; i < Object.keys(modes).length; i++) {
		if (modes[Object.keys(modes)[i]] == true) {
			document.getElementById(Object.keys(modes)[i]).style.display = 'block'
		} else {
			document.getElementById(Object.keys(modes)[i]).style.display = 'none'
		}
	}
	updateIdle()
}

update()

