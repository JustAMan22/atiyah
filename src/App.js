import React, { useState } from "react";
import "./App.css";

function App() {
	const [image, setImage] = useState("");

	const duckImageGetter = async () => {
		try {
			const res = await fetch("http://localhost:5000/duck-image");
			if (res.ok) {
				const result = await res.json();
				setImage(result);
			} else {
				console.error("Failed to fetch duck image");
			}
		} catch (error) {
			console.error("Error fetching duck image:", error);
		}
	};

	return (
		<div className="master-container">
			<div id="main-text">🐣atiyah's duck wallet🐣!!</div>
			<div className="img-container">
				{image ? (
					<img
						className="duck-pic"
						src={image.url}
						alt="Random Duck"
					/>
				) : (
					<img
						className="duck-pic"
						src="https://i.imgur.com/YGYibCL.jpeg"
						alt="Default Duck"
					/>
				)}
			</div>
			<div className="btn-container">
				<button id="btn-actl" onClick={duckImageGetter}>get new duck!!!!!</button>
			</div>
		</div>
	);
}

export default App;
