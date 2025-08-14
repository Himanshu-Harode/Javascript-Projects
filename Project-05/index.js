const slider = document.querySelector(".slider")
const dotsContainer = document.querySelector(".dots-container")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

async function fetchImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
      {
        method: "GET",
      }
    )
    const result = await response.json()

    if (result && result.length > 0) {
      displayImages(result)
      handleImageSlider()
    }
  } catch (error) {
    console.log(error)
  }
}

function displayImages(images) {
  slider.innerHTML = `
    <div class="slider-track">
      ${images
        .map(
          (item) =>
            `<div class="slide" key=${item.id}>
              <img src=${item.download_url} alt=${item.id} />
            </div>`
        )
        .join("")}
    </div>
  `

  dotsContainer.innerHTML = images
    .map(
      (_, index) =>
        `<span class="dot ${
          index === 0 ? "active" : ""
        }" data-slide=${index}></span>`
    )
    .join("")
}

// Slider Functionality

function handleImageSlider() {
  const track = document.querySelector(".slider-track")
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  let currentSlide = 0

  function activeDot(index) {
    dots.forEach((dot) => dot.classList.remove("active"))
    dots[index].classList.add("active")
  }

  function changeCurrentSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length
    changeCurrentSlide(currentSlide)
    activeDot(currentSlide)
  })

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    changeCurrentSlide(currentSlide)
    activeDot(currentSlide)
  })

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      currentSlide = Number(e.target.dataset.slide)
      changeCurrentSlide(currentSlide)
      activeDot(currentSlide)
    }
  })
}

fetchImages()
