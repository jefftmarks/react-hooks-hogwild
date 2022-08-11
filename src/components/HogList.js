import React from "react";
import HogCard from "./HogCard";

function HogList({
	hogs,
	handleClickGreased,
	greasedOnly,
	handleSetCategory
}) {
	const onClickGreased = () => {
		handleClickGreased();
	}

	const onSortHogs = (event) => {
		handleSetCategory(event);
	}

	return (
		<div>
			<button onClick={onClickGreased}>{greasedOnly ? "Show All Hogs" : "Show Greased Hogs"}</button>
			<label htmlFor="sort"> Sort By: </label>
			<select id="sort" onChange={(event) => onSortHogs(event)}>
				<option value="none">None</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
			{hogs.map(hog => (
				<HogCard key={hog.name} hog={hog} />
			))}
		</div>
	)
}

export default HogList;