const btn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.value;
    });
});
// api.chucknorris.io
