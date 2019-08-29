import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => (
  <p>Number of exercises {parts.map(part => part.exercises).reduce((a, b) => a + b)}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
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
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[part1, part2, part3]} 
      />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));