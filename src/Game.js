import React from 'react';

const randomNumber = '97';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			guess: '',
			history: [],
			submitted: false
		}
		this.handleGuess = this.handleGuess.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleGuess(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { guess, history } = this.state;
		if(guess !== randomNumber) {	
			this.setState({ history: history.concat(guess)});
			// WHY DOES THIS NOT CONSOLE LOG THE UPDATED ARRAY - always a nuber behind
			this.setState({submitted:false, guess: ''});

		}
		// value is a string
	}
	handleChange(e) {
		this.setState({ guess: e.target.value });
		// value is a string
	}
	render() {
		const { guess, history, submitted } = this.state;
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
						/>
						<br />
						<button type="submit">Guess!</button>
					</form>
					<h2>Guess #{history.length}</h2>
					<p>{list}</p>
				</div>
			);
		} else {
			if (guess !== randomNumber) {
				return  (
					<div className="game">
						<form onSubmit={this.handleGuess}>
							<input 
								type="number"
								value={ guess }
								onChange={(e) => this.handleChange(e)}
								min={-100}
								max={100}
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
}