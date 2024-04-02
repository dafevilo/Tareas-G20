# Tarea 10

### pre-Pasos para la tarea

- copiar la carpeta de la tarea_10
- cambiar le el nombre
- desde dentro de esa carpeta van a ejecutar el comando `npm i`
- asegurate de que la carpeta node_modules se crea

### Pasos para la tarea

- traer la informacion de los primeros 20 pokemons
- guardar esa informacion en una variable
- traer la informacion por cada pokemon individualmente para luego agregar esa informacion adicional en cada uno

- https://pokeapi.co/api/v2/pokemon
  // axios
  const pokemons = [
  {name: "bulbasaur"},
  {name: "picachu"}
  ]

// axios

- https://pokeapi.co/api/v2/pokemon/bulbasaur

const pokemons = [
{name: "bulbasaur", ...response.data},
{name: "picachu", ...response.data}
]
