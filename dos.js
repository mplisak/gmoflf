var pGame = 0;
var sGame = 0;

const sc = 10;

const c = document.getElementById("canvas");
c.addEventListener("mousedown", fillPixel);

const ctx = c.getContext("2d");
ctx.scale(sc, sc);  

var tableOne = new Array(140); 
var tableTwo = new Array(140);

function createTable(someArray) {
	for (var i = 0; i < someArray.length; i++) { 
		someArray[i] = []; 
	}
	for (var i = 0; i < someArray.length; i++) { 
		for (var j = 0; j < someArray.length; j++) { 
			someArray[i][j] = "0"; 
		} 
	} 
}
 
createTable(tableOne);
createTable(tableTwo);

function fillPixel(event) {
	if (sGame == 0) {
		var x = Math.floor((event.clientX - canvas.offsetLeft - 5)/sc);
		var y = Math.floor((event.clientY - canvas.offsetTop - 5)/sc);
		if (tableOne[x][y] == "0") {
			ctx.fillRect(x, y, 1, 1);
			tableOne[x][y] = "1";
		}else{
			ctx.clearRect(x, y, 1, 1);
			tableOne[x][y] = "0";
		}
	}
}

function pauseGame() {
	if (sGame == 1) {
		if (pGame == 0) {
			pGame = 1;
			document.getElementById("b1").innerHTML = "resume";
		}else{
			pGame = 0;
			document.getElementById("b1").innerHTML = "pause";
			startGame();
		}
	}
}

function resetGame(){
	sGame = 0;
	pGame = 0;
	document.getElementById("b1").innerHTML = "pause";
	for (var i = 0; i < tableOne.length; i++) { 
		for (var j = 0; j < tableOne.length; j++) { 
			tableOne[i][j] = "0"; 
		} 
	} 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startGame() {
	if (pGame == 0) {
		sGame = 1;
	}
}