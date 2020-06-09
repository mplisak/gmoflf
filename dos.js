// variables etc.

var pGame = 0;
var sGame = 0;

const sc = 20;

const c = document.getElementById("canvas");
c.addEventListener("mousedown", fillPixel);

const ctx = c.getContext("2d");
ctx.scale(sc, sc); 

const columns = c.width / sc;
const rows = c.height / sc;

function createTable() {
	return new Array(columns).fill(null)
		.map(() => new Array(rows).fill(0));
}

var tableOne = createTable();
var tableTwo = createTable();

//functions

function fillPixel(event) {
	if (sGame == 0) {
		var x = Math.floor((event.clientX - canvas.offsetLeft - 5) / sc);
		var y = Math.floor((event.clientY - canvas.offsetTop - 5) / sc);
		if (tableOne[x][y] == 0) {
			ctx.fillRect(x, y, 1, 1);
			tableOne[x][y] = 1;
			console.log("filled x" + x + " y" + y);
		}else{
			ctx.clearRect(x, y, 1, 1);
			tableOne[x][y] = 0;
			console.log("cleared x" + x + " y" + y);
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
	tableOne = createTable(); 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startGame() {
	sGame = 1;
	
	console.log("while");
	
	while (pGame == 0) {	
		
		tableOne = createTable();
		

		
		for (let col = 0; col < 70; col++){
		
			for (let row = 0; row < 20; row++){
				
				console.log("first iteration");
				console.log("col" + col + " row" + row);
				
				const cell = tableOne[col][row];
				let neighbours = 0;



				for (let i = -1; i < 2; i++){

					for (let j = -1; j < 2; j++){

						console.log("second iteration");

						if (i == 0 && j == 0) {
							continue;
						}
						
						const xCell = col + i;
						const yCell = row + j;
						
						if (xCell >= 0 && yCell >= 0 && xCell < 70 && yCell < 20) {
							neighbours += tableOne[xCell][yCell];
						}
					}
				}
				
				console.log("applying rules");
				
				if (cell == 1 && (neighbours == 2 || neighbours == 3)) {
					tableTwo[col][row] = 1;
				}else if (cell == 0 && neighbours == 3) {
					tableTwo[col][row] = 1;
				}
			}
		}
		
		console.log("drawing");
		
		tableOne = tableTwo.map(arr => [...arr]);
		tableTwo = createTable();
		for (let k = 0; k < 70; k++){
			for (let l = 0; l < 20; l++){
				if (tableOne[k][l] == 1) {
					ctx.fillRect(k, l, 1, 1);
				}
			}
		}
	}
}