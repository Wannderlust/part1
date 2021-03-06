import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => <div><h1>{title}</h1></div>

const Anecdote = ({ anecdote, score }) => {
	return (
		<div>
		<div>{anecdote}</div>
		<div>has {score} votes</div>
		</div>
	)
}

const Button = ({ text, onClick }) => <div><button onClick={onClick}>{text}</button></div>

const Winner = ({ anecdotes, scores }) => {
	if(scores.reduce((a,b) => a + b,0) > 0) {
		const winner = scores.indexOf(Math.max(...scores))
		return <Anecdote anecdote={anecdotes[winner]} score={scores[winner]}/>
	}
}

const App = ({ anecdote }) => {
	const [selected, setSelected] = useState(0)
	const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

	const selectRandomAnecdote = () => {
		const rand = Math.floor(Math.random() * Math.floor(anecdotes.length));
		setSelected(rand)
	}

	const voteAncedote = () => {
		const point = [...scores]
		point[selected] += 1
		setScores(point)
	}

	return (
		<div>
			<Header title='Anecdote of day'/>
			<Anecdote anecdote={anecdotes[selected]} score={scores[selected]}/>
			<Button text='new anecdote' onClick={selectRandomAnecdote}/>
			<Button text='vote' onClick={voteAncedote}/>
			<Header title='Anecdote with most votes'/>
			<Winner anecdotes={anecdotes} scores={scores}/>
		</div>
		)
	
}

const anecdotes = [
  		'If it hurts, do it more often',
  		'Adding manpower to a late software project makes it later!',
  		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  		'Premature optimization is the root of all evil.',
  		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]


ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root')) 