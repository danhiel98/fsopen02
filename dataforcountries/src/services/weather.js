import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_KEY

// const baseURL = 'https://api.openweathermap.org/data/3.0/onecall'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (lat, lon) => {
  return axios
    .get(`${baseURL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.data)
}

export default { getWeather }
