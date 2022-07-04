const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

console.log(btn);
console.log(color);

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getHexValue() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue = hexValue + hex[getRandomNumber()];
  }
  return hexValue;
  console.log(hexValue);
}

btn.addEventListener("click", function () {
  let hexValue = getHexValue();
  console.log(hexValue);
  document.body.style.backgroundColor = getHexValue();
  color.textContent = getHexValue();
  color.style.color = getHexValue();
});
