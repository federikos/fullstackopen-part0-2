import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBtnClick = (label) => () => {
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.error(`There are no function for label "${label}"`);     
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleBtnClick('goo')} label="good" />
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

  if (!all) return (
    <p>No feedback given</p>
  );

  return (
    <>
      <h2>statistics</h2>
      <table>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={all} />
        <Statistic text="average" value ={average} />
        <Statistic text="positive" value ={positive} />
      </table>
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