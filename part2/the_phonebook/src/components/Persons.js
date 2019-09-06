import React from 'react';

const Persons = ({ persons, onClick }) => (
  <div>
  { persons.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={onClick(person.id, person.name)}>delete</button></p>) }
  </div>
)

export default Persons;