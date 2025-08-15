const pokemonContainer = document.querySelector(".pokemon-container")
const loadMoreData = document.querySelector(".load-more-btn")
const loader = document.querySelector(".loader")
let currentStep = 0

const typeColors = {
  normal: "rgba(168, 167, 122, 0.8)",
  fire: "rgba(238, 129, 48, 0.8)",
  water: "rgba(99, 144, 240, 0.8)",
  electric: "rgba(247, 208, 44, 0.8)",
  grass: "rgba(122, 199, 76, 0.8)",
  ice: "rgba(150, 217, 214, 0.8)",
  fighting: "rgba(194, 46, 40, 0.8)",
  poison: "rgba(163, 62, 161, 0.8)",
  ground: "rgba(226, 191, 101, 0.8)",
  flying: "rgba(169, 143, 243, 0.8)",
  psychic: "rgba(249, 85, 135, 0.8)",
  bug: "rgba(166, 185, 26, 0.8)",
  rock: "rgba(182, 161, 54, 0.8)",
  ghost: "rgba(115, 87, 151, 0.8)",
  dragon: "rgba(111, 53, 252, 0.8)",
  dark: "rgba(112, 87, 70, 0.8)",
  steel: "rgba(183, 183, 206, 0.8)",
  fairy: "rgba(214, 133, 173, 0.8)",
}
async function getPokemon(getCurrentStep) {
  try {
    loader.style.display = "block"
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      }`
    )
    const data = await res.json()

    if (data && data.results) displayPokemons(data.results)
  } catch (e) {
    console.log("Error ", e)
    loader.style.display = "none"
  }
}
function displayPokemons(pokemonList) {
  pokemonList.map((pokemon) => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data1) => {
        const primaryType = data1.types[0].type.name
        const bgColor = typeColors[primaryType] || "rgba(255,255,255,0.4)"

        const cardHTML = `
          <div class="pokemon-wrapper" style="background-color:${bgColor}" key=${
          data1.id
        }>
        <span class="pokemonId">${data1.id}</span>
              <img class="pokemon-img" src="${
                data1.sprites.other.dream_world.front_default
              }" alt="${data1.id}" />
              <p class="pokemon-title">Name - ${data1.name}</p>
              <p class="pokemon-type">Type - ${data1.types
                .map((t) => t.type.name)
                .join(", ")}</p>
              <p class="pokemon-move">Move - ${data1.moves
                .map((t) => t.move.name)
                .slice(0, 2)
                .join(", ")}</p>
          </div>
        `

        pokemonContainer.innerHTML += cardHTML
      })
  })
  loader.style.display = "none"
}
getPokemon(currentStep)

loadMoreData.addEventListener("click", () => {
  getPokemon((currentStep += 1))
})
