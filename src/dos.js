// variables etc.

let running = false;
let looping = false;

const sc = 10;

const c = document.getElementById("canvas");
c.addEventListener("mousedown", fillPixel);

const ctx = c.getContext("2d");
ctx.scale(sc, sc);                                                  //scaling the canvas

const columns = c.width / sc;
const rows = c.height / sc;

function createTable() {
  return new Array(columns).fill(null)
    .map(() => new Array(rows).fill(0));                            //filling new table with 0s
}

var tableOne = createTable();
var tableTwo = createTable();

//functions

function fillPixel(event) {
  if (!running) {
    const rect = canvas.getBoundingClientRect();
    const canvasX = (event.clientX - rect.left) / rect.width * canvas.width;
    const canvasY = (event.clientY - rect.top) / rect.height * canvas.height;
    var x = Math.floor(canvasX / sc);
    var y = Math.floor(canvasY / sc);                                               //getting mouseclick coordinates of the canvas from the coordinates of the site
    if (tableOne[x][y] == 0) {
      ctx.fillRect(x, y, 1, 1);
      tableOne[x][y] = 1;
    } else {
      ctx.clearRect(x, y, 1, 1);
      tableOne[x][y] = 0;                                           //drawing cells, if the clicked cell was already live, it dies
    }
  }
}

function pauseGame() {
  if (running) {
    running = false;    
    document.getElementById("b1").innerHTML = "run";        //pauses the game if it is running, sets the button to 'run'
  } else {
    document.getElementById("b1").innerHTML = "pause";
    startGame();                                            //calls startGame() if game isn't running and sets the button to 'pause'
  }
}

function resetGame() {
  running = false;                                          
  document.getElementById("b1").innerHTML = "run";
  tableOne = createTable();
  ctx.clearRect(0, 0, canvas.width, canvas.height);         //stops the game, sets the button to 'run', clears table and canvas
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const waitFrame = _ => new Promise(resolve => requestAnimationFrame(resolve));

async function startGame() {
  if (running || looping) {
    return;                     //game is already running
  }
  running = true;
  looping = true;     //game is running and isnt paused
  
  while (running) {
    for (let col = 0; col < tableOne.length; col++) {
      for (let row = 0; row < tableOne[col].length; row++) {        //cycling through the table
        const cell = tableOne[col][row];
        let neighbours = 0;
        
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {                            //cycling through the neighbours of the current cell

            if (i == 0 && j == 0) {                                 //not checking the negative coordinates neighbours if the current cell is on the edge of the table/canvas
              continue;
            } 

            const xCell = col + i;
            const yCell = row + j;                              //absolute coordinates from the relative ones

            if (xCell >= 0 && yCell >= 0 && xCell < columns && yCell < rows) {
              neighbours += tableOne[xCell][yCell];                               //adding zero or one to neighbours (the table is filled with numbers 1/0)
            }
          }
        }
        if (cell == 1 && (neighbours == 2 || neighbours == 3)) {
          tableTwo[col][row] = 1;
        } else if (cell == 0 && neighbours == 3) {
          tableTwo[col][row] = 1;                                           //applying rules, cells that will live in the next generation are written in the tableTwo
        }
      }
    }
    tableOne = tableTwo.map(arr => [...arr]);                               //tableTwo is coppied into tableOne
    tableTwo = createTable();                                               //tableTwo is cleared
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let k = 0; k < tableOne.length; k++) {
      for (let l = 0; l < tableOne[k].length; l++) {
        if (tableOne[k][l] == 1) {
          ctx.fillRect(k, l, 1, 1);                                           //drawing new cells
        }
      }
    }
    await wait(200);
  }
  looping = false;
}
