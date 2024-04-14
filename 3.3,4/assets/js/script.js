let globalColor;

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    globalColor = "pink";
  } else if (event.key === "s") {
    globalColor = "orange";
  } else if (event.key === "d") {
    globalColor = "lightblue";
  } else if (event.key === "q") {
    createColoredDiv("purple");
  } else if (event.key === "w") {
    createColoredDiv("gray");
  } else if (event.key === "e") {
    createColoredDiv("brown");
  }

  if (globalColor) {
    document.getElementById("key").style.backgroundColor = globalColor;
  }
});

function createColoredDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  newDiv.style.border = "2px solid black";
  document.body.appendChild(newDiv);
}
