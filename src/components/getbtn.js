import React from "react";

class GetBtn extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getMovie}>
				<button>Get movie</button>
			</form>
		);
	}
}

export default GetBtn;