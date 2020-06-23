import React, {useState, useEffect} from 'react'
import './styles/Detail.css'
import {useParams} from "react-router-dom"
import {capitalize} from '../lib/lib'
import Loading from './Loading'
import {pad_with_zeroes} from '../lib/lib'
import {Link} from 'react-router-dom'
import Types from "./Type";
import SkillsBar from "./Skillsbar";


function Detail() {

    const {id} = useParams();
    const [pokemonData, setPokemonData] = useState({});

    async function getData(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const rawData = await response.json();
        const data = {
            name:rawData.name,
            img:[`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad_with_zeroes(id,3)}.png`],
            hp:rawData.stats[0].base_stat,
            attack:rawData.stats[1].base_stat,
            defense:rawData.stats[2].base_stat,
            ['special-attack']:rawData.stats[3].base_stat,
            ['special-defense']:rawData.stats[4].base_stat,
            speed:rawData.stats[5].base_stat,
            types:rawData.types
        };
        setPokemonData(data);
    }

    useEffect(() => {
        getData(id)
    },[id]);


    if(!pokemonData.name) {
       return(
           <Loading />
       )
    }

    return(
        <div className="main">
            <Link to={`/detail/${Number(id) === 1 ? id : Number(id)-1}`}><i className="arrow left"></i></Link>
            <div>
                <div className="title-pokemon-detail">{capitalize(pokemonData.name)}</div>
                <div className="id-detail">{`#${pad_with_zeroes(id,3)}`}</div>
            </div>
		<img alt="pokemon image" src={pokemonData.img} className="image" onLoadStart={() => console.log('loading...')} />
            <Link to={`/detail/${Number(id) === 807 ? id : Number(id)+1}`}><i className="arrow right"></i></Link>
            <div></div>
            <div>
                <span className="type-title">Types</span>
                <Types types={pokemonData.types}/>
            </div>
            <div>
                <SkillsBar pokemon={pokemonData} />
            </div>
	  </div>
    )
}

export default Detail