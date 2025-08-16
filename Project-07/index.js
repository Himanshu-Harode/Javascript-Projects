const changeThemeBtn = document.querySelector(".change-theme-btn")
const body = document.querySelector("body")

// Approach 1 => In this we can set the body class to dark and light and toggle them => Code gets lengthy in this because we have to give dark and light class statically

// changeThemeBtn.addEventListener("click", () => {
//   body.classList.contains("light")
//     ? [body.classList.remove("light"), body.classList.add("dark")]
//     : [body.classList.remove("dark"), body.classList.add("light")]
// })

// Approach 2 => Using Data theme property and root color define => In this method we have dont have to write excess code just give data property for theme

changeThemeBtn.addEventListener("click", () => {
  body.getAttribute("data-theme") == "dark"
    ? [
        body.removeAttribute("data-theme", "dark"),
        body.setAttribute("data-theme", "light"),
      ]
    : [
        body.removeAttribute("data-theme", "light"),
        body.setAttribute("data-theme", "dark"),
      ]
})
