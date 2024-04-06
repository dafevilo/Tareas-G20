const axios = require("axios");

function main() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => {
        const pokemons = response.data.results.map(pokemon => pokemon.name); 
        pokemons.forEach(pokemonName => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(infoResponse => { 
                const pokemonInfo = infoResponse.data.name;
                const newpoke =[ {...pokemonInfo, name: "bulbasaur",}];

                console.log(newpoke);
            })
            .catch(error => {

                console.error('Ha ocurrido un error al obtener la información del Pokémon:', error);
            });
        });
    })
    .catch(error => {
        console.error('Ha ocurrido un error al obtener la lista de Pokémon:', error);
    });
}
main();