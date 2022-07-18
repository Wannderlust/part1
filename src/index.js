import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
		<div>
			<h1>{props.course}</h1>
		</div>
		)
}

const Content = (props) => {
	return (
		<div>
			<Part part1={props.part1.name} exercises1={props.part1.exercises}/>
			<Part part2={props.part2.name} exercises2={props.part2.exercises}/>
			<Part part3={props.part3.name} exercises3={props.part3.exercises}/>
		</div>
		)
}


const Part = (props) => {
	return (
		<div>
			<p>{props.part1} {props.exercises1}</p>
			<p>{props.part2} {props.exercises2}</p>
			<p>{props.part3} {props.exercises3}</p>
		</div>
		)
}

const Total = (props) => {
	return (
		<div>
		 <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
		</div>
		)
}


const App = () => {
  //const course = 'Half Stack application development'
  /**const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }**/
   /**const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]**/

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const [part1, part2, part3] = course.parts
  return (
    <div>
      <Header course={course.name}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

/**const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header course={course}/>
			<Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
			<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
		</div>
		)
}**/

ReactDOM.render(<App />, document.getElementById('root')) 