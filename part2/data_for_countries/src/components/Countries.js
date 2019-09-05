import React from 'react'

const Countries = ({ countries, onClick }) => (
  countries.map(country => {
    return (
      <div key={country.numericCode}>
        <p>
          {country.name} <button onClick={onClick(country.name)}>show</button>
        </p>
      </div>
    )
  })
)

export default Countries;