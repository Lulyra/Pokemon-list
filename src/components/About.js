import React from 'react'
import './styles/About.css'

function About() {
    return(
        <div className="about-main">
		<div className="about-title">About</div>
		<img className="image-about" alt="Luiz Paulo Image" src={require('../img/perfil.jpg')}/>
		<p className="paragraph-about">
		    I am an engineer that has been interested in  Web Development. <br/> <br/>
		    This project is intended to understand Context and Routing with React. <br/> <br/>
		    Any suggestion or doubts about the project is welcome.
		    You can find me on my social network.<br /><br /><br />
		    <a target="_blank" className="icon-about" href="https://www.linkedin.com/in/luiz-paulo-oliveira-lyra-de-miranda-b68486168/" >
			  <ion-icon name="logo-linkedin"></ion-icon>
		    </a>
		</p>
        </div>
    )
}

export default About