import React,{useContext} from 'react'
import {PageContext} from '../context/pageContext'
import {PokemonContext} from '../context/pokemonContext'
import './styles/Pagination.css'

function Pagination() {

    const {page,handlePageChange, setGoPage} = useContext(PageContext);
    const {lastPagePokemon} = useContext(PokemonContext);
    return(
        <div className="main-pagination">
		<button className="button-pagination"
			  name="firstPage"
			  onClick={setGoPage} value={0}
			  hidden={page < 2}>
		    ...
		</button>
		<button
		    className="button-pagination"
		    name="previous"
		    onClick={handlePageChange}
		    hidden={page === 0}>
		    -
		</button>
		<button
		    className="button-pagination"
		    disabled={true}>
		    {page + 1}
		</button>
		<button
		    className="button-pagination"
		    name="next"
		    onClick={handlePageChange}
		    hidden={page === lastPagePokemon} >
		    +
		</button>
		<button
		    className="button-pagination"
		    name="lastPage"
		    onClick={setGoPage}
		    value={lastPagePokemon}
		    hidden={page <= lastPagePokemon && page > lastPagePokemon -2}>
		    ...
		</button>
	  </div>
    )
}

export default Pagination
