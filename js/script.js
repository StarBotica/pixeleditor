const matrix = document.getElementById("matrix");
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");

function createMatrix() {
  // Clear the current matrix
  matrix.innerHTML = "";

  // Create the squares
  for (let i = 0; i < widthInput.value * heightInput.value; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = "black";
    matrix.appendChild(square);

    // Create a label for the square
    const label = document.createElement("span");
    label.classList.add("label");
    label.textContent = "0, 0, 0"; // Initialize the label text
    square.appendChild(label);

    // Add a line break after every widthInput.value squares
    if ((i + 1) % widthInput.value === 0) {
      matrix.appendChild(document.createElement("br"));
    }

    // Set the size of the squares
    square.style.width = `${800 / widthInput.value}px`;
    square.style.height = `${800 / heightInput.value}px`;
    
    // Add margin to the bottom of each square
    square.style.marginBottom = "4px";

    // Set the width of the label to match the width of the square
    label.style.width = `${800 / widthInput.value}px`;
    // Prevent the label from expanding beyond the size of the square
    label.style.whiteSpace = "nowrap";

    // Add event listener to the square
    square.addEventListener("click", () => {
      square.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
      // Update the label text with the new RGB values
      const label = square.querySelector(".label");
      label.textContent = `${redInput.value}, ${greenInput.value}, ${blueInput.value}`;
    });
  }
}

createMatrix();