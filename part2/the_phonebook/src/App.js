import React, { useState } from 'react'

const Persons = ({ persons }) => (
  <div>
  { persons.map(person => <p key={person.name}>{person.name}</p>) }
  </div>
)

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat({name: newName}));
      setNewName('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App