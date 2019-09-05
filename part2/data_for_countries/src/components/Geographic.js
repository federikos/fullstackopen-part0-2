import React from 'react'

const Geographic = ({ country }) => (
  <>
    <h2>{country.name}</h2>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
    <h3>languages</h3>
    <ul>
      {country.languages.map(languageObj => {
        return (
          <li key={languageObj.iso639_1}>{languageObj.name}</li>
        )
      })}
    </ul>
    <img src={country.flag} alt={`flag of ${country.name}`} width='150' />
  </>
)

export default Geographic