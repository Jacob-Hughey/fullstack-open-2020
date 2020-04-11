import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="notification">
            {message}
        </div>
    )
}

const Error = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

const Delete = ({ name, id }) => {
    const response = () => {
        if (window.confirm(`Delete ${name}?`)) {
            personService.remove({id})
        }
    }

    return (
        <button onClick={response}>delete</button>
    )
}

const Filter = ({ onChange }) => {
    return (
        <div>
            filter shown with <input onChange={onChange} />
        </div>
    )
}

const PersonForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input value={props.newName} onChange={props.onNameChange} />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.onNumberChange} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

const Number = (props) => {
    return (
        <li>
            {props.name} 
            {props.number}
            <Delete name={props.name} id={props.id} /> 
        </li>
    )
}

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filteredPersons, setFilteredPersons ] = useState(persons)
    const [ notificationMessage, setNotificationMessage ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
                setFilteredPersons(initialPersons)
            })
    }, [])

    const changeNumber = (id) => {
        const person = persons.find(p => p.id === id)
        const changedPerson = { ...person, number: newNumber }

        personService
            .update(id, changedPerson).then(returnedPerson => {
                setPersons(persons.map(person => person.id !== id ? person : returnedPerson))

                setNotificationMessage(
                    `Changed ${person.name}'s number`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 3000)
            })
            .catch(error => {
                setErrorMessage(
                    `the person '${person.name}' was already deleted from the server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 3000)
                setPersons(persons.filter(p => p.id !== id))
            })

        setNewName('')
        setNewNumber('')
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(e => e.name === newName)) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const person = persons.find(p => p.name === newName)
                changeNumber(person.id)
            }
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(personObject))
                    setFilteredPersons(persons)

                    setNotificationMessage(
                        `Added ${newName}`
                    )
                    setNewName('')
                    setNewNumber('')
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 3000)
                })
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilteredPersons(persons.filter(function(el) {
            return el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        }))
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <Notification message={notificationMessage} />
            <Error message={errorMessage} />

            <Filter onChange={handleFilterChange} />

            <h3>Add a new</h3>

            <PersonForm
                onSubmit={addPerson} newName={newName} onNameChange={handleNameChange}
                newNumber={newNumber} onNumberChange={handleNumberChange}
            />

            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((person) =>
                    <Number key={person.name} name={person.name} number={person.number} id={person.id} />
                )}
            </ul>
        </div>
    )
}

export default App
