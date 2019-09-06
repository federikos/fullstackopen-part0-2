import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState([])
  const [ showFiltered, setShowFiltered ] = useState(false)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => setPersons(initialPersons))
        .catch(e => alert(`error: ${e.message}`))
  }, []);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!persons.some(person => person.name === newName)) {
      const personObj = {name: newName, number: newNumber};

      personService
        .create(personObj)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('');
            setNewNumber('');
          })
          .catch(e => alert(`error: ${e.message}`))
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);

  const handlefilterValueChange = e => {
    setFilterValue(e.target.value)
    
    e.target.value === ''
    ? setShowFiltered(false)
    : setShowFiltered(true)

    setFilteredPersons(persons.filter(person => {
      return person.name.split(' ').some(name => name.toLowerCase() === e.target.value.toLowerCase())
    }))
  }

  const handleDelClick = (id, name) => () => {
    window.confirm(`Delete ${name}? Seriously?`)
    &&
    personService
      .del(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(e => alert(`hasn't been able to remove ${name}, error: ${e.message}`))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} onChange={handlefilterValueChange} />
      <h2>Add a new</h2>
      <PersonForm 
        onSubmit={handleFormSubmit} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons={showFiltered ? filteredPersons : persons} onClick={handleDelClick} />
    </div>
  )
}

export default App