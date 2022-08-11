const adviceId = document.getElementById("id");
const adviceQuote = document.getElementById("advice");
const diceBtn = document.getElementById("btn");
const dice = document.getElementById("dice-img");
const url = "https://api.adviceslip.com/advice";

function loadAdvice() {
  adviceId.innerHTML = `<span class="one">.</span><span class="two">.</span
    ><span class="three">.</span>`;
  adviceQuote.textContent = "";
  dice.classList.add("elastic-spin");
}

diceBtn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loadAdvice();

      setTimeout(() => {
        adviceId.textContent = `Advice #${data.slip.id}`;
        adviceQuote.textContent = `"${data.slip.advice}"`;
        dice.classList.remove("elastic-spin");
      }, 4000);
    })
    .catch((err) => {
      adviceQuote.textContent = "There seems to be a problem 😵";
    });
});
