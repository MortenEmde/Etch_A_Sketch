// runs the code with default grid of 16x16 //
grid(16)

function grid(gridSize){
    createGrid(gridSize);
    colorCell();
}

// Sketch grid //
function createGrid(gridSize) {
    const container = document.querySelector(".container");
    let rowLength = gridSize;
    let columnLength = gridSize;

    for (let gridX = 0; gridX < rowLength; gridX++) {
        let row = document.createElement('div');
            row.classList.add("row");
            container.appendChild(row)
     
    for (let gridY = 0; gridY < columnLength; gridY++) {
        let column = document.createElement('div');
            column.classList.add("cell");
            row.appendChild(column);
        }              
    }
}

// Color each cell //
function colorCell() {
    let cells = allCells();
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.cssText = "background-color : white";
        })
    })
}

// Reset button //
let btnR = document.querySelector(".btnReset");
btnR.addEventListener("click", resetCells)

function resetCells(){
    let cells = allCells();
        cells.forEach((cell) => {
        cell.style.cssText = ("background-color : black");
    });  
}

// Grid size button //
let btnGS = document.querySelector(".btnSize");
btnGS.addEventListener("click", size);

function size(){
        let rows = allRows();
        rows.forEach((row) => {
        row.parentNode.removeChild(row);
        })

    input = prompt("What size drawing Grid would you like? (between 1 and 100)", 16)
    if (input > 100){
        alert("ERROR - Number must be less than 100");
    } else if (isNaN(input)){
        alert("ERROR - You must type a number");
    } else {
        grid(input)
    }
}

// Function to work with all cells or rows at once //
function allCells() {
    return document.querySelectorAll(".cell");
}

function allRows() {
    return document.querySelectorAll(".row");
}