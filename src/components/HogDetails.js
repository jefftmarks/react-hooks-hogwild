import React from "react";

function HogDetails({hog}) {
	const medal = hog["highest medal achieved"][0].toUpperCase() + hog["highest medal achieved"].slice(1);

	return(
		<ul>
			<li>Specialty: {hog.specialty}</li>
			<li>Weight: {hog.weight}</li>
			<li>Status: {hog.greased ? "Greased" : "Not Greased"}</li>
			<li>Highest Medal Achieved: {medal}</li>
		</ul>
	)
}

export default HogDetails;