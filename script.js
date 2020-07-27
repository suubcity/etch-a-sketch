"use strict";

const gridContainer = document.querySelector("#gridContainer");
const button = document.querySelector("button");
button.addEventListener("click", resetGrid);

//create initial grid
createNewGrid(16);

function resetGrid() {
  clearGrid();
  createNewGrid(getGridSize());
  addEventListnerToGridSquares();
}

function createNewGrid(size) {
  gridContainer.style.cssText = `
  grid-template-columns: repeat(${size}, 1fr);
  grid-template-rows: repeat(${size}, 1fr);
  `;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("gridSquare");
    gridContainer.appendChild(div);
  }
  addEventListnerToGridSquares()
}

function addEventListnerToGridSquares() {
document.querySelectorAll(".gridSquare").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    item.style.cssText = "background: black";
  });
});
}

function clearGrid() {
  let grid = document.querySelectorAll(".gridSquare");
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.cssText = "background: white";
  }
}

function getGridSize() {
  return prompt("Enter new grid size", "16");
}
