const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";
const pokemons = [];
const pokemonsFull = [];

async function main() {
  try {
    const response = await axios.get(API); // espera a que la api solicitada  se ejecute
    pokemons.push(...response.data.results); // ingresamos los datos de dentro del array pokemon
    const pokemonName = response.data.results[0].name; //  guardamos el nombre en pokemoname

    const responsePokemon = await axios.get(`${API}/${pokemonName}`); //  realiza y espera la segunda soicitud

    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name === responsePokemon.data.name) {
        pokemonsFull.push({ ...pokemons[i], ...responsePokemon.data });
      } else {
        pokemonsFull.push(pokemons[i]);
      }
    }

    console.log(pokemonsFull);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
