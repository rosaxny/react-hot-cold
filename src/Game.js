import React from 'react';

const randomNumber = () => Math.floor((Math.random() * 201) - 100).toString();

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			guess: '',
			history: [],
			submitted: false, 
			randomNumber: randomNumber()
		}
		this.handleGuess = this.handleGuess.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleGuess(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { guess, history, randomNumber } = this.state;
		if(guess !== randomNumber) {	
			this.setState({ history: history.concat(guess)});
			// WHY DOES THIS NOT CONSOLE LOG THE UPDATED ARRAY - always a number behind
			this.setState({submitted:false, guess: ''});
		}
		// value is a string
	}
	handleChange(e) {
		this.setState({ guess: e.target.value });
		console.log(this.state)
		// value is a string
	}
	render() {
		const { guess, history, submitted, randomNumber } = this.state;
		let list = history.join(', ');
		if (submitted === false) {
			return (
				<div className="game">
					<form onSubmit={this.handleGuess}>
						<input 
							type="number"
							value={ guess }
							onChange={(e) => this.handleChange(e)}
							min={-100}
							max={100}
							required
						/>
						<br />
						<button type="submit">Guess!</button>
					</form>
					<h2>Guess #{history.length}</h2>
					<p>{list}</p>
				</div>
			);
		} else {
			return  (
				<div className="game">
					<p>Correct! The number was {randomNumber}!</p>
					<form onSubmit={this.handleGuess}>
						<input 
							type="number"
						/>
						<br />
						<button type="submit">Guess!</button>
					</form>
					<h2>Guess #{history.length}</h2>
					<p>{list}</p>
				</div>
			);
		}

	}
}