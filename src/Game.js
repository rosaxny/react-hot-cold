import React from 'react';
import GuessHistory from './GuessHistory';

export default class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<form>
					<input type="text" />
					<br />
					<button type="submit">Guess!</button>
				</form>
				<GuessHistory />
			</div>
		);
	}
}