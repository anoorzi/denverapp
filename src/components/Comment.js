import React from "react";

export default class Comment extends React.Component {
	render() {
		return (
			<div className="card">
				
                <p onClick= {this.props.view}> {this.props.data.neighborhood_name}</p>

			</div>
		);
	}
}