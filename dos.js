var pGame = 0;
var sGame = 0;

const sc = 10;

const c = document.getElementById("canvas");
c.addEventListener("mousedown", fillPixel);

const ctx = c.getContext("2d");
ctx.scale(sc, sc);  

var tableColumns = new Array(140); 
  
for (var i = 0; i < tableColumns.length; i++) { 
    tableColumns[i] = []; 
}

for (var i = 0; i < tableColumns.length; i++) { 
    for (var j = 0; j < tableColumns.length; j++) { 
        tableColumns[i][j] = "0"; 
    } 
} 

function fillPixel(event) {
	var x = Math.floor((event.clientX - canvas.offsetLeft - 5)/sc);
	var y = Math.floor((event.clientY - canvas.offsetTop - 5)/sc);
	if(tableColumns[x][y] == "0"){
		ctx.fillRect(x, y, 1, 1);
		tableColumns[x][y] = "1";
	}else{
		ctx.clearRect(x, y, 1, 1);
		tableColumns[x][y] = "0";
	}

}



function pauseGame() {
	if(pGame == 0 && sGame == 1) {
		pGame = 1;
		document.getElementById("b1").innerHTML = "resume";
	}else{
		pGame = 0;
		document.getElementById("b1").innerHTML = "pause";
	}
}



function resetGame(){
	sGame = 0;
	pGame = 0;
	document.getElementById("b1").innerHTML = "pause";
	for (var i = 0; i < tableColumns.length; i++) { 
		for (var j = 0; j < tableColumns.length; j++) { 
			tableColumns[i][j] = "0"; 
		} 
	} 
	ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function startGame() {
	sGame = 1;
}


