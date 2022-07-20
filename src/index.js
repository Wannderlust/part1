import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>
		)
}

const Statistis = ({ value, text }) => {
	return (
		<div>
			<p>{text}: {value}</p>
		</div>
		)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGoodClick = () => {
		setGood(good + 1)
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1)
	}

	const handleBadClick = () => {
		setBad(bad + 1)
	}


	return (
		<div>
			<h2>Give Feedback</h2>
			<Button onClick={handleGoodClick} text='good'/>
			<Button onClick={handleNeutralClick} text='neutral'/>
			<Button onClick={handleBadClick} text='bad'/>

			<h2>Statistis</h2>
			<Statistis value={good} text='good'/>
			<Statistis value={neutral} text='neutral'/>
			<Statistis value={bad} text='bad'/>
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root')) 