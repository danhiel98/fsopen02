import axios from 'axios'
import { useEffect, useState } from 'react'
import Management from './components/Management'

function App() {
  const [countries, setCountries] = useState([])
  const [found, setFound] = useState([])

  const handleSearch = (event) => {
    let country = event.target.value

    let result = countries.filter(c => {
      return c.name.common.toLowerCase().includes(country.toLowerCase())
    })

    setFound(result)
  }

  const setCountry = (item) => {
    setFound([item])
  }

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.data)
      .then(data => setCountries(data))
  }, [])

  return (
    <>
      <p>find countries <input onChange={handleSearch} /></p>
      <Management data={found} setCountry={setCountry} />
    </>
  )
}

export default App
