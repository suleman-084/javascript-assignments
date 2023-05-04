let inputField = document.getElementById("text");
let btn = document.getElementById("convert-btn");

let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let screamSnake = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let screamKebab = document.getElementById("screaming-kebab-case");

btn.addEventListener("click", () => {
  camel.textContent = toCamel(inputField.value);
  pascal.textContent = toPascal(inputField.value);
  snake.textContent = toSnake(inputField.value);
  kebab.textContent = toKebab(inputField.value);
  screamSnake.textContent = toScreamSnake(inputField.value);
  screamKebab.textContent = toScreamKebab(inputField.value);
});
function toPascal(sentance) {
  return sentance
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join("");
}

function toCamel(sentance) {
  let pascal = sentance
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join("");
  return pascal[0].toLowerCase().concat(pascal.slice(1));
}

function toSnake(sentance) {
  let snake = sentance
    .split(" ")
    .map((word) => "_".concat(word))
    .join("");
  return snake.replace("_", "");
}

function toScreamSnake(sentance) {
  let snake = sentance
    .split(" ")
    .map((word) => "_".concat(word))
    .join("");
  return snake.replace("_", "").toUpperCase();
}

function toKebab(sentance) {
  let snake = sentance
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return snake.replace("-", "");
}

function toScreamKebab(sentance) {
  let snake = sentance
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return snake.replace("-", "").toUpperCase();
}
