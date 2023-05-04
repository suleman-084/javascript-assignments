const userscore = document.getElementById("userScoreVal");
const compScore = document.getElementById("compScoreVal");
const userStat = document.getElementById("result-user-stat");
const compStat = document.getElementById("result-comp-stat");
const resultStat = document.getElementById("result-final-stat");
const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("s");
const arrayOfChoices = document.querySelectorAll(".choice");

let userSelection;
let compSelection;

let userCounter = 0;
let compCounter = 0;

function fullForm(str) {
  if (str === "r") {
    return "rock";
  }
  if (str === "p") {
    return "paper";
  }
  if (str === "s") {
    return "scissors";
  }
}
function compPlay() {
  let randomIndex = Math.floor(Math.random() * arrayOfChoices.length);
  compSelection = arrayOfChoices[randomIndex].getAttribute("id");
}

function ifUserWon() {
  userCounter++;
  userscore.innerText = userCounter;
  resultStat.innerText = "Winner : USER";
}

function ifCompWon() {
  compCounter++;
  compScore.innerText = compCounter;
  resultStat.innerText = `Winner : COMP`;
}
function ifDraw() {
  resultStat.innerText = `Winner : Draw`;
}
function evaluateScore() {
  const userWinOne = userSelection === "r" && compSelection === "s";
  const userWinTwo = userSelection === "p" && compSelection === "r";
  const userWinThree = userSelection === "s" && compSelection === "p";
  const draw = userSelection === compSelection;

  if (userWinOne || userWinTwo || userWinThree) {
    ifUserWon();
    console.log("User Won");
  } else if (draw) {
    ifDraw();
    console.log("Draw");
  } else {
    ifCompWon();
    console.log("Comp Won");
  }
}
arrayOfChoices.forEach((element) => {
  element.addEventListener("click", () => {
    userSelection = element.getAttribute("id");
    compPlay();
    userStat.innerText = `User :${fullForm(userSelection)} `;
    compStat.innerText = `Comp :${fullForm(compSelection)} `;
    evaluateScore();
  });
});
