var c = document.getElementById("canvas007");
var ctx = c.getContext("2d");
ctx.scale(10, 10);  

function showCoords(event) {
	var x = event.clientX;
	var y = event.clientY;
	document.getElementById("coo").innerHTML = "x:" + x + " y:" + y;
}
