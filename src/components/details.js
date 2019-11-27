import React from "react";

const Description = props => (
	<div className="poster-wrapper">
		{props.title &&
			<div className="poster-container">
				<p className="poster__descr">{props.title}{`(${parseInt(props.release)})`}</p>
				<img className="poster__img" src={`https://image.tmdb.org/t/p/w342/${props.poster}`} />

			</div>
		}
	</div>
);


export default Description;