import { useState, useEffect } from "react"
import weatherService from '../services/weather'

const Weather = ({ country }) => {
  const [lat, lng] = country.latlng
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    weatherService
      .getWeather(lat, lng)
      .then(data => {
        const weatherInfo = {
          temp: data.main.temp,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon
        }

        setWeatherData(weatherInfo)
      })
  }, [])

  return (
    <>
      <p>temperature {weatherData.temp}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="" width={150} />
      <p>wind {weatherData.windSpeed} m/s</p>
    </>
  )
}

export default Weather
