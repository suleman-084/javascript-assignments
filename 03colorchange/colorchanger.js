let btn = document.getElementById("button");
let can = document.getElementById("canvas");

// if you want to  add a specific color you can use the commented method too it will be short and easy
// btn.addEventListener("click", () => {
//   can.style.backgroundColor = "black";
// });

const randomcolor = () => {
  let val = "1234567890ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * 16)];
  }
  return hash;
};

// you can write the function outside and then use event listener or you can use both function and event listener at a time
// function colorchanger() {
//   can.style.backgroundColor = randomcolor();
// }

// btn.addEventListener("click", colorchanger);
btn.addEventListener("click", () => {
  can.style.backgroundColor = randomcolor();
});
