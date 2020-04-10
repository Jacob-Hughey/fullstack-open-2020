import React, { useState } from 'react'

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
        <li>{props.name} {props.number}</li>
    )
}

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-1234567' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filteredPersons, setFilteredPersons ] = useState(persons)

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(e => e.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
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

            <Filter onChange={handleFilterChange} />

            <h3>Add a new</h3>

            <PersonForm
                onSubmit={addPerson} newName={newName} onNameChange={handleNameChange}
                newNumber={newNumber} onNumberChange={handleNumberChange}
            />

            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((person) =>
                    <Number key={person.name} name={person.name} number={person.number} />
                )}
            </ul>
        </div>
    )
}

export default App
