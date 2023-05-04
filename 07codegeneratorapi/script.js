const inputText = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const imageEle = document.getElementById("img");

submitBtn.addEventListener("click", () => {
  let userInput = inputText.value.replaceAll(" ", "+");
  //   console.log(userInput);
  if (userInput.length > 0) {
    imageEle.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=125x125&data=" +
      userInput;
  }
  if (userInput === "") {
    imageEle.style.display = "none";
  } else {
    imageEle.style.display = "block";
  }
});
