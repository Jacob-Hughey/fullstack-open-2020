import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [ weather, setWeather ] = useState([])

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=New%20York`)
            .then(response => {
                setWeather(response.data.current)
            })
    })

    return (
        <>
            <p><b>temperature:</b> {weather.temperature} Celcius</p>
            <p><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </>
    )
}

const Country = ({ country, onClick }) => {
    return (
        <div key={country.name}>
            {country.name}
            <button onClick={onClick} value={country.name}>show</button>
        </div>
    )
}

const Countries = ({ countries, onClick }) => {
    if (countries.length === 0) {
        return (
            <></>
        )
    }
    else if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (countries.length > 1) {
        return (
            <div>
                {countries.map((country) =>
                    <Country key={country.name} country={country} onClick={onClick} />
                )}
            </div>
        )
    }
    else {
        console.log(countries[0])
        return (
            <>
                <h2>{countries[0].name}</h2>
                <div>capital {countries[0].capital}</div>
                <div>population {countries[0].population}</div>
                <h3>languages</h3>
                <ul>
                    {countries[0].languages.map((language) =>
                        <li key={language.name}>{language.name}</li>
                    )}
                </ul>
                <img src={countries[0].flag} alt='flag' width='200px' />
                <h3>Weather in {countries[0].capital}</h3>
                <Weather country={countries[0]} />
            </>
        )
    }

}

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ filteredCountries, setFilteredCountries ] = useState(countries)

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFind = (event) => {
        setFilteredCountries(countries.filter(function(el) {
            return el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        }))
    }

    const handleShow = (event) => {
        setFilteredCountries(countries.filter(function(el) {
            return el.name.indexOf(event.target.value) !== -1
        }))
    }

    return (
        <div>
            find countries <input onChange={handleFind} />
            <Countries countries={filteredCountries} onClick={handleShow} />
        </div>
    )
}

export default App
