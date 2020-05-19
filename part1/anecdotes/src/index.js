import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ content, points }) => (
  <div>
    {content}
    <div>has {points} votes</div>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat)) //[0, 0, 0, 0, 0, 0, 0]
  const [best, setBest] = useState(0)

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
    setPoints(newPoints);

    if (newPoints[best] < newPoints[selected]) {
      setBest(selected);
    }
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <Anecdote content={anecdotes[selected]} points={points[selected]} />
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextClick}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <Anecdote content={anecdotes[best]} points={points[best]} />
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