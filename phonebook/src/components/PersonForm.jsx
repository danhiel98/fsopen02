const PersonForm = (props) => {
  const { handleSubmit, onChangeName, newName, onChangeNumber, newNumber } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input required onChange={onChangeName} value={newName} />
      </div>
      <div>
        number: <input required onChange={onChangeNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm