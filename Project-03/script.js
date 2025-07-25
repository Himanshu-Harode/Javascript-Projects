const stars = document.querySelectorAll(".fa-regular")
const selectedRatingValueText = document.querySelector(".selected-rating-value")

let currentTotalSelectedStars = -1

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1
  starItem.addEventListener("mouseover", handleMouseOver)
  starItem.addEventListener("click", handleOnClick)
  starItem.addEventListener("mouseleave", handleMouseLeave)
})

function handleMouseOver(e) {
  const currentRatingValue = e.target.dataset.rating
  if (!currentRatingValue) return
  else handleUpdateRatingState(currentRatingValue)
}

function handleUpdateRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-regular", "fa-solid")
    } else {
      stars[i].classList.replace("fa-solid", "fa-regular")
    }
  }
}

function handleOnClick(e) {
  const currentRatingValue = e.target.dataset.rating
  currentTotalSelectedStars = currentRatingValue
  handleUpdateRatingState(currentTotalSelectedStars)
  selectedRatingValueText.textContent = currentTotalSelectedStars
}

function handleMouseLeave() {
  handleUpdateRatingState(currentTotalSelectedStars)
}
