import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({hog}) {
	const [detailsHidden, setDetailsHidden] = useState(true);

	const onShowDetails = () => {
		setDetailsHidden(!detailsHidden);
	}

	return (
		<div onClick={onShowDetails}>
			<h2>{hog.name}</h2>
			<img
				src={hog.image}
				alt="pig"
				style={{height: "200px", width: "auto"}}
			/>
			{detailsHidden ? null : <HogDetails hog={hog} />}
		</div>
	)
}

export default HogCard;