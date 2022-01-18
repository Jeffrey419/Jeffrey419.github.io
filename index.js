var title = "website"
document.getElementById("title").innerHTML = title;


window.onscroll = function() {makeItStick()};

var navbar = document.getElementById("top");
var sticky = navbar.offsetTop;

function makeItStick(){
	if (window.pageYOffset >= sticky) {
		navbar.style.position = "fixed";
		navbar.style.top = 0;
	} else {
		navbar.style.position = 'absolute';
		navbar.style.top = 0;
	}
}
