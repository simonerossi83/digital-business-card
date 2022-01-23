import React from "react";
import Foto from './images/foto-profilo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Main.css';

export function Main(){
	return(
		<main>
			<img src={Foto} alt="Man with kitten" id="main--foto"/>
			<div id="content">
				<h1>Simone Rossi</h1>
				<h2>Project Engineer</h2>
				<a href="https://www.skorpionfire.com/">www.skorpionfire.com</a>
			<div id="button-div">
				<a href="mailto:simone.rossi1983@protonmail.com"> <button id="mail-button">
				<i class="far fa-envelope"></i> Email
				</button>
				</a>
				<a href="https://it.linkedin.com/in/simonerossi1983">
				<button id="linkedin-button">
				<i class="fab fa-linkedin"></i> LinkedIn
				</button>
				</a>
			</div>
			<div id="description">
				<h3>About</h3>
				<p>I am a project engineer on the Oil and Gas market, but I am really fond of IT stuff, that's why I am learnig React</p>
				<h3>Interests</h3>
				<p>I like cooking, music and above all I like stilt dancing and juggling with LED and fire (I founded my own entertainment company)</p>
			</div>
			</div>
		</main>
	)
}