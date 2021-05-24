window.onresize = screen
window.onload = screen

function screen() {
	width = window.innerWidth
	document.querySelector('.size').innerHTML = `Width is: ${width} px`
}
