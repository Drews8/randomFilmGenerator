import React from "react";

class DelBtn extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.delMovie}>
				<button>Del movie</button>
			</form>
		);
	}
}

export default DelBtn;