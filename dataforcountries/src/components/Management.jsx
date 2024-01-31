import Country from "./Country"

const Management = ({ data, setCountry }) => {
  if (!data) return (<p>No data found</p>)

  if (data.length === 1)
    return <Country country={data[0]} />

  if (data.length > 10)
    return <p>Too many matches, specify another filter</p>

  if (data.length > 0) {
    return data
      .map(c =>
        <p key={c.area}>
          {c.name.common} <button onClick={() => setCountry(c)}>show</button>
        </p>
      )
  }
}

export default Management
