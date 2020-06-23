import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
		<Link to="/" className='navbar-home'>Home</Link>
		<Link to="/about" className='navbar-about'>About</Link>
	  </div>
    )
}

export default Navbar