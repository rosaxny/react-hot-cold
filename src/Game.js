import React from 'react';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			guess: '',
			history: [],
			submitted: false,
			feedback: 'Make a guess!', 
			randomNumber: Math.floor((Math.random() * 201) - 100).toString()
		}
		this.handleGuess = this.handleGuess.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleGuess(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { guess, history, randomNumber } = this.state;
		const diff = Math.abs(parseInt(guess, 10) - parseInt(randomNumber, 10));
		if(guess !== randomNumber) {	
			this.setState({ history: history.concat(guess)});
			// WHY DOES THIS NOT CONSOLE LOG THE UPDATED ARRAY - always a number behind
			this.setState({submitted:false, guess: ''});
			console.log(this.state)
			console.log('DIFFERENCE IS', diff);
			if (diff >= 50) {
				this.setState({ feedback: 'You are very cold.'})
			} else if (diff >= 33) {
				this.setState({ feedback: 'You are cold.'})
			} else if (diff >= 25) {
				this.setState({ feedback: 'You are warm.'});
			} else if (diff >= 15) {
				this.setState({ feedback: 'You are very warm.'});
			} else if (diff >= 7) {
				this.setState({ feedback: 'You are hot!'})
			} else {
				this.setState({ feedback: 'You are very hot!'});
			}
		} else {
			this.setState({ feedback: 'Correct! The number was '});
		}
		
		// value is a string
	}
	handleChange(e) {
		this.setState({ guess: e.target.value });
		// value is a string
	}
	render() {
		const { guess, history, submitted, feedback, randomNumber} = this.state;
		let list = history.join(', ');
		if (submitted === false) {
			return (
				<div className="game">
					<form onSubmit={this.handleGuess}>
						<p>{feedback}</p>
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
					<p>{feedback} {randomNumber}. </p>
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