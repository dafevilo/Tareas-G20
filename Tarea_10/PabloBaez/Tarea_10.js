const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function main() {
  axios
    .get(API)
    .then((response) => {
      const pokemons = response.data.results;
      const pokemonNames = pokemons.map((pokemon) => pokemon.name);
      console.log(pokemonNames);
      pokemonNames.forEach((pokemonName) => {
        axios
          .get(`${API}/${pokemonName}`)
          .then((response) => {
            const pokemonInfo = response.data;
            console.log("***NOMBRE DEL POKEMON: ",pokemonName, ">>> INFORMACION DEL POKEMON: ",pokemonInfo);

          })
          .catch((error) => {
            console.error(`Error obteniendo información de ${pokemonName}: `, error);
          });
      });
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main();
