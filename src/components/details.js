import React from "react";

const Description = props => (
	<div>
		{props.title &&
			<div>
				<img src={`https://image.tmdb.org/t/p/w342/${props.poster}`} />
				<p>{props.title}{`(${parseInt(props.release)})`}</p>

			</div>
		}
	</div>
);


export default Description;