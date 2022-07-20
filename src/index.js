import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>
		)
}

const Statistis = (props) => {
	const {good, neutral, bad} = props
	const all = good + bad + neutral

	if (all > 0){
		const average = (good - bad)/all
		return (
			<div>
			    <Statistic text='good' value={good}/>
				<Statistic text='neutral' value={neutral}/>
				<Statistic text='bad' value={bad}/>
				<Statistic text='all' value={all}/>
				<Statistic text='average' value={average}/>
				<Statistic text='positive' value={(good * 100)/all + '%'}/>
			</div>
			)
	} else {
		return (
			<div>
				<p>No feedback given</p>
			</div>
			)
	}
}

const Statistic = ({ text, value })  => {
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
			<Statistis good={good} neutral={neutral} bad={bad}/>
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root')) 