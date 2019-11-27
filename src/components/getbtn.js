import React from "react";

class GetBtn extends React.Component {
	render() {
		return (
			<form className="getMovie" onSubmit={this.props.getMovie}>
				<button className="getMovie__btn">Get movie</button>
			</form>
		);
	}
}

export default GetBtn;