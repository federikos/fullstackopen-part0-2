import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  const [maxVotesIndex, setMaxVotesIndex] = useState(0)
  useEffect(() => getMaxVotesIndex());

  const getMaxVotesIndex = () => {
    for (let i = 0; i < points.length; i++) {
      if (points[i] > points[maxVotesIndex]) {
        setMaxVotesIndex(i);
      } 
    }
  };

  const handleNextClick = () => {
    const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);
    let randomIndex = getRandomIndex();
    //coerce to get another value
    while (anecdotes.length > 1 && randomIndex === selected) {
      randomIndex = getRandomIndex();
    }

    setSelected(randomIndex)
  }
  
  const handleVoteClick = () => {
    const newPoints = [...points];
    newPoints[selected]++;
    setPoints(newPoints)
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{props.anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextClick}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[maxVotesIndex]}</p>
        <p>has {points[maxVotesIndex]} votes</p>
      </div>
    </>
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)