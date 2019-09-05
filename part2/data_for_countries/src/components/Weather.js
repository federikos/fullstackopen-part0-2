import React from 'react'

const Weather = ({ weatherData, country }) => {
  if (!weatherData) return('');
  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <p><b>temperature:</b> {weatherData.main.temp} Celsius</p>
      <p><b>overcast:</b> {weatherData.clouds.all}%</p>
      <p><b>wind:</b> {weatherData.wind.speed} kph, direction {weatherData.wind.deg} degree</p>
    </div>
  )
}

export default Weather;