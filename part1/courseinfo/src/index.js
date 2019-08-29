import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({paragraph}) => (
    <p>{paragraph.part} {paragraph.exercises}</p>
)

const Content = ({paragraphs}) => {
  return (
    <div>
      <Part paragraph={paragraphs[0]}/>
      <Part paragraph={paragraphs[1]}/>
      <Part paragraph={paragraphs[2]}/>
    </div>
  )
}

const Total = ({exercises}) => (
  <p>Number of exercises {exercises.reduce((a, b) => a + b)}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        paragraphs={[
          {part: part1, exercises: exercises1},
          {part: part2, exercises: exercises2},
          {part: part3, exercises: exercises3}
        ]} 
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));