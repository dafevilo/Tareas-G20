const axios = require("axios");

function main() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20") // utilizando axios, obtener la informacion de los primeros 20 pokemons
    .then(response => {
        const pokemons = response.data.results.map(pokemon => pokemon.name); //guardar esa informacion en una variable
        
        pokemons.forEach(pokemonName => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)//utilizando el nombre de cada pokemon, traer la informacion por cada uno 
            .then(infoResponse => {     ////(individualmente) para actualizar la informacion de cada pokemon
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