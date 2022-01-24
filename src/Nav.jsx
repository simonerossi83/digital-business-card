import React, {useState} from "react";
import './Nav.css';

export function Nav(props){

	const [color, setColor] = useState(['dark']);
	
	function handleToggle(){
		setColor(color === 'dark' ? 'light' : 'dark');
		props.onToggle(color);
	}

	return(
		<nav>
		<button onClick={handleToggle}>Toggle {color}</button>
		</nav>
	)
};