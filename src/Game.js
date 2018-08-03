import React from 'react';
import GuessHistory from './GuessHistory';

const randomNumber = '987';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			guess: ''
		}
		this.handleGuess = this.handleGuess.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleGuess(e) {
		e.preventDefault();
		if(this.state.guess === randomNumber) {
			console.log('yay!')
		} else {
			console.log('boooo');
		}
		// value is a string
	}
	handleChange(e) {
		this.setState({guess: e.target.value});
		// value is a string
	}
	render() {
		const { guess } = this.state
		return (
			<div className="game">
				<form onSubmit={this.handleGuess}>
					<input 
						type="text"
						value={ guess }
						onChange={this.handleChange}
					/>
					<br />
					<button type="submit">Guess!</button>
				</form>
				<GuessHistory />
			</div>
		);
	}
}