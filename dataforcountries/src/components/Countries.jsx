const Countries = ({ data }) => {
  return (
    data
      .map(c =>
        <p key={c.area}>
          {c.name.common} <button>show</button>
        </p>
      )
  )
}

export default Countries
