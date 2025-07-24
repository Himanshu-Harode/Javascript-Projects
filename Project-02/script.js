// Create Random Hex Color
const hexBtn = document.querySelector(".hex-btn")
const hexColorValue = document.querySelector(".hex-color-value")
const hexColorContainer = document.querySelector(".hex-color-container")
const hexCopyBtn = document.querySelector(".hexCopyBtn")
hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF"
  let hexColorOutput = ""
  charSetLen = characterSet.length
  for (let i = 0; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLen)
    )
  }
  hexColorValue.textContent = `#${hexColorOutput}`
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
  console.log(hexColorOutput)
})

// RGB color
const rgbColorContainer = document.querySelector(".rgb-color-container")
const rgbColorValue = document.querySelector(".rgb-color-value")
const rgbBtn = document.querySelector("#rgbBtn")
const getRedInputRange = document.querySelector("#red")
const getGreenInputRange = document.querySelector("#green")
const getBlueInputRange = document.querySelector("#blue")
const rgbCopyBtn = document.querySelector(".rgbCopyBtn")
let rgbColor = ""

rgbBtn.addEventListener("click", () => {
  let extractedRedVal = getRedInputRange.value
  let extractedGreenVal = getGreenInputRange.value
  let extractedBlueVal = getBlueInputRange.value
  rgbColor = `rgb(${extractedRedVal},${extractedGreenVal},${extractedBlueVal})`
  rgbColorValue.textContent = rgbColor
  console.log(rgbColor)
  rgbColorContainer.style.backgroundColor = rgbColor
})

function copyRGBColorToClipboard() {
  console.log(rgbColor)
  navigator.clipboard.writeText(rgbColor)
  alert(`RGB color copied - ${rgbColor}`)
}
rgbCopyBtn.addEventListener("click", () => {
  copyRGBColorToClipboard()
})

function copyHexColorToClipboard() {
  console.log(hexColorValue.textContent)
  navigator.clipboard.writeText(hexColorValue.textContent)
  alert(`HEX color copied - ${hexColorValue.textContent}`)
}
hexCopyBtn.addEventListener("click", () => {
  copyHexColorToClipboard()
})
