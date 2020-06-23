import React, {useState, useEffect, createContext, useContext} from 'react'
import {PageContext} from '../context/pageContext'

const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const {page} = useContext(PageContext);
    const [allPokemons,setAllPokemons] = useState([]);
    const [pokemonPages, setPokemonPages] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
	  setIsLoading(true);
	  getAllPokemons(page);
	  setIsLoading(false);
	  },[]);

    useEffect(()=>{
	  createPagesPokemon(25)
    },[allPokemons]);

    async function getAllPokemons() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`);
	const rawData = await response.json();
	const arrayPkm = rawData.results;
	const data = arrayPkm.map(rawPokemon =>  {
	    return (
	        {name:rawPokemon.name, url:rawPokemon.url}
	        )
	});
	const promiseArray = data.map( async pokemon  => {
	    const res = await fetch(pokemon.url);
	    const rawData = await res.json();
	    return  {
	        ...pokemon,
		    id:rawData.id,
                sprites:rawData.sprites,
		    types:rawData.types
	    }
	});
	Promise.all(promiseArray)
	    .then( value => setAllPokemons(value));
    }

    const createPagesPokemon = (pageSize = 25) => {
	  let numberPage = 0;
        let tempArray = [];
        let tempPages = {};

	  for(let i=1; i < allPokemons.length + 1; i++){
		tempArray.push(allPokemons[i-1]);
		if(i % pageSize === 0 || i === allPokemons.length){
		    tempPages ={
			  ...tempPages,
			  [numberPage]:tempArray
		    };
		    numberPage++;
		    tempArray = [];
		}
	  }
	  setPokemonPages(tempPages)
    };

    const lastPagePokemon = Object.keys(pokemonPages).length - 1;

    return(
	  <PokemonContext.Provider value={{allPokemons,isLoading, pokemonPages, lastPagePokemon}}>
		{props.children}
	  </PokemonContext.Provider>
    )
};

export {PokemonContext, PokemonContextProvider}