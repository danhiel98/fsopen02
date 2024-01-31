const Numbers = ({ getPersons, handleDelete }) => {
  return (
    getPersons().map((person) => (
      <p key={person.name}>
        {person.name} {person.number}
        <button onClick={() => handleDelete(person.id)}>delete</button>
      </p>
    )
    )
  )
}

export default Numbers
