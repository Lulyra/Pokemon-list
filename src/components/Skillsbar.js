import React from 'react'
import './styles/SkillsBar.css'
import {capitalize} from '../lib/lib'

function SkillsBar(props) {
   const pokemon = props.pokemon;
   const skills = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
   const result = skills.map( skill => {
       return(
           <>
		   <div className="text-skill-bar">{capitalize(skill.split('-').join(' '))}:</div>
		   <div className="container">
			 <div className="skills css" style={{width: `${pokemon[skill]/255*100}%`}}>
			     {pokemon[skill]}
			 </div>
		   </div>
	     </>
	 )
   });

    return(
        <div className="skills-table">
		{result}
	  </div>
    )
}

export default SkillsBar