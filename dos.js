var a = 0;

function changeText() {
	if(a == 0) {
		a = 1;
		document.getElementById("b1").innerHTML = "resume";
	}else{
		a = 0;
		document.getElementById("b1").innerHTML = "pause";
	}
}

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
