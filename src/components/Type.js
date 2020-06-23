import React from 'react'
import './styles/Type.css'
import {capitalize} from '../lib/lib'
import Weakness from './Weakness'

function Types(props) {

    const result = props.types.map( type => {
        return(
            <li key={type.slot} className={type.type.name}>{capitalize(type.type.name)}</li>
	  )
    });

    return(
	  <div>
		<ul className="type-list">
		    {result}
		</ul>
		<div className="type-title">
		    Weakness
		</div>
		<ul>
		    <Weakness type={props.types} />
		</ul>
	  </div>
    )

}

export default Types
