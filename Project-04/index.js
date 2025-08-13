// Display method
function displayProducts(products, containerSelector) {
  const container = document.querySelector(containerSelector)
  container.innerHTML = products
    .slice(0, 3)
    .map(
      (item) => `
      <div class="cart">
        <img src="${item.thumbnail}" alt="${item.title}"/>
        <div class="title">${item.title}</div>
        <p>Price: $${item.price}</p>
        <p>Quantity: $${item.quantity}</p>
      </div>
    `
    )
    .join("")
}

// <=== Fetch using XHR ===>
function fetchUsingXHR() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://dummyjson.com/carts")
  xhr.responseType = "json"
  xhr.send()

  xhr.onload = () => {
    xhr.status === 200
      ? displayProducts(xhr.response.carts[0].products, ".XHRMethod")
      : console.error("Error occurred:", xhr.statusText)
  }
}
fetchUsingXHR()

// <=== Fetch using Fetch API ===>
function fetchUsingFetchMethod() {
  fetch("https://dummyjson.com/carts")
    .then((response) => response.json())
    .then((result) => displayProducts(result.carts[1].products, ".fetchMethod"))
    .catch((e) => console.error("Error", e))
}
fetchUsingFetchMethod()

// <=== Fetch using Async/Await ===>
async function fetchUsingAsyncAwait() {
  try {
    const res = await fetch("https://dummyjson.com/carts")
    const result = await res.json()
    displayProducts(result.carts[4].products, ".asyncMethod")
  } catch (error) {
    console.error("Error:", error)
  }
}
fetchUsingAsyncAwait()

// <=== Fetch using Axios ===>
function fetchUsingAxios() {
  axios
    .get("https://dummyjson.com/carts")
    .then((res) => displayProducts(res.data.carts[5].products, ".axiosMethod"))
    .catch((error) => {
      console.log(error)
    })
}
fetchUsingAxios()
