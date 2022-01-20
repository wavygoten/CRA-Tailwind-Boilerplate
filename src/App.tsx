/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx } from "@emotion/react";
import "./App.css";
import Input from "./components/Input";

function App() {
	return (
		<>
			<Input type="email" placeholder="jane@example.com" primary={true} />
		</>
	);
}

export default App;
