import React from 'react'
import {capitalize} from "../lib/lib";
import './styles/Type.css'

const WEAK_TABLE ={
    bug:['fire','flying','rock'],
    dark:['bug','fairy','fighting'],
    dragon:['dragon','fairy','ice'],
    electric:['ground'],
    fairy:['poison','steel'],
    fighting:['fairy','flying','psychic'],
    fire:['ground','rock','water'],
    flying:['electric', 'ice', 'rock'],
    ghost:['dark', 'ghost'],
    grass:['bug','fire','flying','ice','poison'],
    ground:['grass', 'ice', 'water'],
    ice:['fighting', 'fire', 'rock', 'steel'],
    normal:['fighting'],
    poison:['ground', 'psychic'],
    psychic:['bug','dark','ghost'],
    rock:['fighting','grass','ground','steel','water'],
    steel:['fighting', 'fire', 'ground'],
    water:['electric', 'grass']
};

function Weakness(props) {
	  let Weakness = [];
	  const weaksTemp = [];
	  props.type.forEach(type => {
		const weaks = WEAK_TABLE[type.type.name];
		const compenteWeak = weaks.map( (weak,index) => {

		    if( weaksTemp.includes(weak)){
		        return ''
		    } else {
		        weaksTemp.push(weak)
		    }
		    return (<li key={index} className={weak}>{capitalize(weak)}</li>)
		});
		Weakness = [
		    ...Weakness,
		    compenteWeak
		]
	  });

	return(
	    <>
		  <ul className="weak-list">{Weakness}</ul>
	    </>

	)
}

export default Weakness