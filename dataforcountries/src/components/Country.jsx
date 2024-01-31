import Weather from "./Weather"

const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>

      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <strong>languages:</strong>

      <ul>
        {
          Object.keys(country.languages)
            .map(k => <li key={k}>{country.languages[k]}</li>)
        }
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} width={200} />

      <Weather country={country} />
    </>
  )
}

export default Country
