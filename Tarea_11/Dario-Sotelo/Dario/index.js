// Async await
const { default: axios } = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  const response = await axios.get(API);
  console.log(response.data);
  const arrayPromises = response.data.results.map((pokemon) => {
    return axios.get(`${API}/${pokemon.name}`);

    const pokemons = async () => {
      const fullPokemons = await Promise.all(pokemons.map((pokemon) => {
        const response = await responses.find(
          (response) => response.data.name === pokemon.name
      }));
      return fullPokemons;
    };

  const pokemonsFull =  response.data.results.map(())
  });

  const responses = await Promise.all(arrayPromises);
}

main();
