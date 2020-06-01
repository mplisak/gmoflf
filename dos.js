const sc = 10;

const c = document.getElementById("canvas");
c.addEventListener("mousedown", showCoords);

const ctx = c.getContext("2d");
ctx.scale(sc, sc);  

function showCoords(event) {
	var x = Math.floor((event.clientX - canvas.offsetLeft)/sc)-1;
	var y = Math.floor((event.clientY - canvas.offsetTop)/sc)-1;
	ctx.fillRect(x, y, 1, 1);
}
