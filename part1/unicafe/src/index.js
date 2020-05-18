import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleBtnClick = label => () => {
    if (!Object.keys(feedback).includes(label)) {
      console.error(`There are no state for label "${label}"`);
      return;
    }
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [label]: prevFeedback[label] + 1
    }))
  }

  const { good, neutral, bad } = feedback;

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleBtnClick('good')} label="good" />
      <Button onClick={handleBtnClick('neutral')} label="neutral" />
      <Button onClick={handleBtnClick('bad')} label="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = `${good / all * 100} %`;

  const renderStatistic = () => (
    <table>
      <tbody>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={all} />
        <Statistic text="average" value ={average} />
        <Statistic text="positive" value ={positive} />
      </tbody>
    </table>
  )

  return (
    <>
      <h2>statistics</h2>
      {
        all ? renderStatistic() : <p>No feedback given</p>
      }
    </>
  )
}

const Button = ({onClick, label}) => {
  return <button onClick={onClick}>{label}</button>
}

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )

ReactDOM.render(<App />, 
  document.getElementById('root')
)