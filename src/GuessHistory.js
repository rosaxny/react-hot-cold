import React from 'react';

export default class GuessHistory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guess: 0
		}
	}
	render() {
		return (
			<div>
				<p>Guess #{this.state.guess}</p>
			</div>
		);
	}
}