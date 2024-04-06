const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  let pokemonCount = 0;
  const response = await axios.get(API);
  const pokemons = response.data.results;
  const pokemonNames = pokemons.map((pokemon) => pokemon.name);
  console.log(pokemonNames);

  pokemonNames.forEach(async (pokemonName) => {
    const response = await axios.get(`${API}/${pokemonName}`);
    const pokemonInfo = response.data;
    console.log(pokemonName, pokemonInfo);
    pokemonCount++;
    console.log(`información de ${pokemonCount} Pokémon: ${pokemonNames}`);
  });
  
}

main()