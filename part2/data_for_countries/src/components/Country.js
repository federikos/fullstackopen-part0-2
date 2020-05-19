import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Geographic from './Geographic'
import Weather from './Weather'

const Country = ({ country }) => {
  const [ weatherData, setWeatherData ] = useState('');
  const OPEN_WEATHER_KEY = '7f3e13071424487a413e7be17543d75a';
  
  useEffect(() => {
    axios
      .get( `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${OPEN_WEATHER_KEY}`)
      .then(res => setWeatherData(res.data))

  }, [country.capital]);
  
  return (
    <>
      <Geographic country={country} />
      <Weather weatherData={weatherData} country={country} />
    </>
  )
}

export default Country;