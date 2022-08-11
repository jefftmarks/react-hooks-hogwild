import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortCategory, setSortCategory] = useState("none");

	const handleClickGreased = () => {
		setGreasedOnly(!greasedOnly);
	}

	const handleSetCategory = (event) => {
		setSortCategory(event.target.value);
	}

	const compareHogs = (a, b) => {
		if (sortCategory === "weight") {
			return a.weight - b.weight;
		} else if (sortCategory === "name") {
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x < y) {
				return -1;
			} else if (x > y) {
				return 1;
			}
			return 0;	
		}
	}

	const filteredHogs = hogs
	.filter(hog => greasedOnly ? hog.greased : hog)
	.sort(compareHogs)

	return (
		<div>
				<Nav />
				<HogList
					hogs={filteredHogs}
					handleClickGreased={handleClickGreased}
					greasedOnly={greasedOnly}
					handleSetCategory={handleSetCategory}
				/>
		</div>
	);
}

export default App;
