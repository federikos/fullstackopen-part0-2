import React from 'react';

const Header = ({courseName}) => (
  <h1>{courseName}</h1>
)

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Content = (props) => {
  const parts = props.parts;

  return (
    <div>
      {
        parts.map(part => (
          <Part part={part} key={part.id}/>
        ))
      }
    </div>
  )
}

const Total = ({parts}) => (
  <p>Number of exercises {parts.map(part => part.exercises).reduce((a, b) => a + b)}</p>
)

const Course = ({course}) => {
  return (
    <>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default Course;