//Aquí va tu código

const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function main(){
   axios
    get(API)
    .then((response)=> {
        pokemonName.push(...response.data.results);
        const pokemonName = response.data.results[0].name;
        //segunda promesa
        return axios.get (`${API}/${pokemonName}`);
    })
    .then((response)=>{
        //pokemonName.slice(...response.data.results)
        //const primerosVeinte = response.data.results.name;
        console.log(primerosVeinte);
        console.log(response.data);
    });
    cach((error) =>{
        console.error("error:", error)
    })
}
main();

