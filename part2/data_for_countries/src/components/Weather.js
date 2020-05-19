import React from 'react'

const Weather = ({ weatherData, country }) => {
  if (!weatherData) return null;
  const { clouds: { all }, wind: { speed, deg }, main: { temp }, weather } = weatherData;
  const { icon: weatherIcon, description: weatherDescription } = weather[0];
  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={weatherDescription}/>
      <p><b>temperature:</b> {temp} Celsius</p>
      <p><b>overcast:</b> {all}%</p>
      <p><b>wind:</b> {speed} kph, direction {deg} degree</p>
    </div>
  )
}

export default Weather;