const quoteWrapper = document.querySelector(".quote-wrapper")
const refreshBtn = document.querySelector(".refresh-btn")
function fetchRandomQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => displayQuote(data))
    .catch((e) => console.log(e))
}

function displayQuote(getQuote) {
  console.log(getQuote)
  quoteWrapper.innerHTML = `
    <div class="quote-item"> 
    <p class="quote">
    <i class="fa-solid fa-quote-left"></i>
    ${getQuote.quote}
    <i class="fa-solid fa-quote-right"></i>
    </p>
    <p class="author">${getQuote.author}</p>
    </div>
  `
}

fetchRandomQuote()

refreshBtn.addEventListener("click", () => {
  fetchRandomQuote()
})
