import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ filteredCountries, setFilteredCountries ] = useState('');

  const handleInputChange = e => {
    const newFilteredCountries = countries.filter(country => {
        return new RegExp(`${e.target.value}`, 'i').test(country.name.toLowerCase());
    });
    setFilteredCountries([...newFilteredCountries]);
  }
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => setCountries(res.data))
  }, [])

  return (
    <div className="App">
      <div>
        find countries <input onChange={handleInputChange} />
      </div>
      <div>
        {
          filteredCountries.length > 10 
          && 'Too many matches, specify another filter'
        }
        {
          (filteredCountries.length <= 10 && filteredCountries.length > 1) 
          && filteredCountries.map(country => <p key={country.numericCode}>{country.name}</p>)
        }
        {
          filteredCountries.length === 1
          && 
            <div>
              <h2>{filteredCountries[0].name}</h2>
              <p>capital {filteredCountries[0].capital}</p>
              <p>population {filteredCountries[0].population}</p>
              <h3>languages</h3>
              <ul>
                {filteredCountries[0].languages.map(languageObj => {
                  return (
                    <li key={languageObj.iso639_1}>{languageObj.name}</li>
                  )
                })}
              </ul>
              <img src={filteredCountries[0].flag} alt={`flag of ${filteredCountries[0].name}`} />
            </div>
        }
      </div>
    </div>
  );
}

export default App;
