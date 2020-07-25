"use strict";

const gridContainer = document.querySelector("#gridContainer");

function createDivs() {
  for (let i = 0; i < 16 * 16; i++) {
    let div = document.createElement("div");
    div.classList.add("gridSquare");
    gridContainer.appendChild(div);
  }
}
createDivs();

document.querySelectorAll(".gridSquare").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    item.style.cssText = "background: white";
  });
});

