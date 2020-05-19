import React from 'react';

const Header = ({courseName}) => (
  <h1>{courseName}</h1>
)

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({parts}) => (<div>
  {parts.map(part => (<Part part={part} key={part.id} />))}
</div>)

const Total = ({parts}) => (
  <b>Total of {parts.map(part => part.exercises).reduce((a, b) => a + b, 0)} exercises</b>
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