import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Geographic from './Geographic'
import Weather from './Weather'

const Country = ({ country }) => {
  const [ weatherData, setWeatherData ] = useState('');
  const openweatherKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  
  useEffect(() => {
    axios
      .get( `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${openweatherKey}`)
      .then(res => setWeatherData(res.data))

  }, [country.capital, openweatherKey]);
  
  return (
    <>
      <Geographic country={country} />
      <Weather weatherData={weatherData} country={country} />
    </>
  )
}

export default Country;