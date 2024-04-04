const { default: axios } = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function main() {
  const pokemons = [];

  axios
    .get(API)
    .then((response) => {
      pokemons.push(...response.data.results);

      const promises = pokemons.map((pokemon) => {
        return axios.get(`${API}/${pokemon.name}`);
      });
      Promise.all(promises).then((responses) => {
        const pokemonsFull = pokemons.map((pokemon) => {
          const response = responses.find(
            (response) => response.data.name === pokemon.name
          );
          return { ...pokemon, ...response.data };
        });

        console.log("RESPUESTA FINAL: ", pokemonsFull);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

main();