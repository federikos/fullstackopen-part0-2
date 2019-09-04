import React, { useState } from 'react'

const Search = ({ onChange }) => {
  return (
    <div>
      filter shown with <input onChange={onChange} />
    </div>
  )
}

const Persons = ({ persons }) => (
  <div>
  { persons.map(person => <p key={person.name}>{person.name} {person.number}</p>) }
  </div>
)

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [showFiltered, setShowFiltered] = useState(false)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue] = useState('')
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat({name: newName, number: newNumber}));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleSearchValueChange = e => {
    setSearchValue(e.target.value)
    
    e.target.value === ''
    ? setShowFiltered(false)
    : setShowFiltered(true)

    setFilteredPersons(persons.filter(person => {
      return person.name.split(' ').some(name => name.toLowerCase() === e.target.value.toLowerCase())
    }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={searchValue} onChange={handleSearchValueChange} />
      <h2>Add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={showFiltered ? filteredPersons : persons}/>
    </div>
  )
}

export default App