// const container;
// const error;

// function getAge(){

// }

// function calcAge(){

// }

// function displayAge(){

// }
const containerEL = document.querySelector(".container");
const errorEL = containerEL.querySelector(".error");
const dateInputEL = containerEL.querySelector("#dob");

dateInputEL.addEventListener("change", (e) => {
  const dateValue = e.target.value;
  getAge(dateValue);
});

function getAge(dateValue) {
  const userDob = new Date(dateValue);
  const userYear = userDob.getFullYear();
  const userMonth = userDob.getMonth() + 1;
  const userDay = userDob.getDay();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDay();
}

function calcAge() {}

function displayAge() {}

const mydate = new Date();
console.log(mydate.getDay());
console.log(mydate.getMonth());
console.log(mydate.getFullYear());
