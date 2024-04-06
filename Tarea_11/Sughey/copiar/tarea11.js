const axios = require('axios');

async function obtenerPokemons() {
    try {
       const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");

       const pokemons = response.data.results.map(pokemon => ({ name: pokemon.name }));

            for (let i = 0; i < pokemons.length; i++) {
            const pokemonName = pokemons[i].name;
            const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            pokemons[i] = { ...pokemons[i], ...pokemonResponse.data };
        }

        console.log("Información de los primeros 20 pokemons:");
        console.log(pokemons);
    } catch (error) {
        console.error("Error al obtener la información de los pokemons:", error);
    }
}

obtenerPokemons();
