import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ filteredCountries, setFilteredCountries ] = useState('');

  const handleInputChange = ({ target: { value: inputValue }}) => {
    const newFilteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredCountries([...newFilteredCountries]);
  }

  const handleBtnClick = name => () => {
    setFilteredCountries(filteredCountries.filter(country => country.name === name))
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
          && <Countries countries={filteredCountries} onClick={handleBtnClick}/>
        }
        {
          filteredCountries.length === 1
          && <Country country={filteredCountries[0]} />
        }
      </div>
    </div>
  );
}

export default App;
