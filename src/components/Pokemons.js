import React,{useContext} from 'react'
import './styles/Pokemons.css'
import {PokemonContext} from '../context/pokemonContext'
import {PageContext} from '../context/pageContext'
import {pad_with_zeroes} from '../lib/lib'

import {Link} from 'react-router-dom'

function Pokemons() {

    let result = '';

    const {pokemonPages} = useContext(PokemonContext);
    const {page} = useContext(PageContext);


    if(pokemonPages[page]){

        result = pokemonPages[page].map(pkmn => (

		<div key={pkmn.id} className ='pokemon'>
		    <div>
			  <Link to={`/detail/${pkmn.id}`}>
				<img alt="Pokemon" className="image-pokemon-list" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad_with_zeroes(pkmn.id,3)}.png`} />
			  </Link>
		    </div>
		    <div>{pad_with_zeroes(pkmn.id,3)}</div>
		    {pkmn.name}
		</div>

	  ));
    }
    return(
        <div className="pokemon-container">
		{result}
	  </div>
    )
}

export default Pokemons