import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Search from './components/Search'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [notificationType, setNotificationType] = useState('sucess')

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])

  const existsPerson = (name) => {
    return persons.find(el => el.name.toLowerCase() === name.toLowerCase())
  }

  const onChangeName = (event) => setNewName(event.target.value)
  const onChangeNumber = (event) => setNewNumber(event.target.value)
  const onChangeSearch = (event) => setSearch(event.target.value.toLowerCase())

  const getPersons = () => {
    return persons.filter(p => {
      return p.name.toLowerCase().indexOf(search) !== -1
    })
  }

  const showMessage = (msg, type) => {
    setNotificationMsg(msg)
    setNotificationType(type)
    setTimeout(() => {
      setNotificationMsg(null)
    }, 5000)
  }

  const clearInputs = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (existsPerson(newName)) {
      const person = persons.find(p => p.name.toLowerCase() === newName.toLocaleLowerCase())

      const message = `${person.name} is already added to phonebook, replace the old number with a new one?`
      if (confirm(message)) {
        personService
          .update(person.id, { ...person, number: newNumber })
          .then(data => {
            setPersons(persons.map(p => p.id !== data.id ? p : data))
            showMessage(`Updated ${data.name}`, 'sucess')
          })
      }

      return
    }

    const record = { name: newName, number: newNumber }

    personService
      .create(record)
      .then(data => {
        setPersons(persons.concat(data))
        showMessage(`Added ${data.name}`, 'sucess')
        clearInputs()
      })
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id).then(data => {
          setPersons(persons.filter(p => p.id !== data.id))
          showMessage(`Deleted ${data.name}`, 'sucess')
        })
        .catch((error) => {
          if (error.response.status === 404) {
            showMessage(`Information of ${person.name} has already been removed from server`, 'error')
            setPersons(persons.filter(p => p.id !== person.id))
          }
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMsg} type={notificationType} />
      <Search onChangeSearch={onChangeSearch} />

      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit}
        onChangeName={onChangeName}
        onChangeNumber={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
      />


      <h2>Numbers</h2>
      <Numbers getPersons={getPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
