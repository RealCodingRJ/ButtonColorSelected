const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

function randomColorPicked(color) {
  const randomColor = Math.floor(Math.random() * color.length);
  return color[randomColor];
}
const colors = ["RED", "GREEN", "BLUE"];
const randomColor = randomColorPicked(colors);

button1.addEventListener("click", () => {
  if (randomColor == "RED") {
    alert("Correct!");
  }
});
button2.addEventListener("click", () => {
  if (randomColor == "BLUE") {
    alert("Correct!");
  }
});
button3.addEventListener("click", () => {
  if (randomColor == "GREEN") {
    // button3.textContent = "Correct!";
    alert("Correct!");
  }
});
