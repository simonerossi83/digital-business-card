import React from "react";
import Foto from './images/foto-profilo.png';

import './Main.css';

export function Main(props){
	
	let style = {};
	
	if(props.color === 'dark'){
		style = {
			colorH1: 'white',
			colorH2: '#F3BF99',
			colorH3: '#F5F5F5',
			colorP: '#DCDCDC',
			background: '#1A1B21'
		}
	}
	else if(props.color === 'light'){
		style = {
			colorH1: 'black',
			colorH2: '#0C4066',
			colorH3: '#0A0A0A',
			colorP: '#232323',
			background: '#E5E4DE'
		}
	};

	return(
		<main style={{backgroundColor: style.background}}>
			<img src={Foto} alt="Man with kitten" id="main--foto"/>
			<div id="content" style={{backgroundColor: style.background}}>
				<h1 style={{color: style.colorH1}}>Simone Rossi</h1>
				<h2 style={{color: style.colorH2}}>Project Engineer</h2>
				<a href="https://www.skorpionfire.com/">www.skorpionfire.com</a>
			<div id="button-div" style={{backgroundColor: style.background}}>
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
			<div id="description" style={{backgroundColor: style.background}}>
				<h3 style={{color: style.colorH3}}>About</h3>
				<p style={{color: style.colorP}}>I am a project engineer on the Oil and Gas market, but I am really fond of IT stuff, that's why I am learnig React</p>
				<h3 style={{color: style.colorH3}}>Interests</h3>
				<p style={{color: style.colorP}}>I like cooking, music and above all I like stilt dancing and juggling with LED and fire (I founded my own entertainment company)</p>
			</div>
			</div>
		</main>
	)
}