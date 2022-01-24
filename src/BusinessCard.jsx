import React, {useState} from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Main } from "./Main";

export function BusinessCard() {

	const [mode, setMode] = useState();

	const onNavToggle = (color) => setMode(color);
	console.log(mode);

	return (
    <div className="businessCard">
		<Nav onToggle={onNavToggle}/>
		<Main color={mode}/>
		<Footer />
    </div>
  );
}