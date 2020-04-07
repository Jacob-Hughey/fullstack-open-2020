import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistic = (props) => {
    if (isNaN(props.clicks)) {
        return (
            <tr>
                <td>{props.name}</td>
                <td>0</td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.clicks}</td>
        </tr>
    )
}

const Percent = (props) => {
    if (isNaN(props.percent)) {
        return (
            <tr>
                <td>{props.name}</td>
                <td>0%</td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.percent * 100}%</td>
        </tr>
    )
}

const App = (props) => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const setToGood = (newGood) => {
        setGood(newGood)
        setAll(all + 1)
    }

    const setToNeutral = (newNeutral) => {
        setNeutral(newNeutral)
        setAll(all + 1)
    }
    
    const setToBad = (newBad) => {
        setBad(newBad)
        setAll(all + 1)
    }

    return (
        <div>
            <Header text='give feedback' />
            <Button handleClick={() => setToGood(good + 1)} text='good' />
            <Button handleClick={() => setToNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setToBad(bad + 1)} text='bad' />
            <Header text='statistics' />
            <table><tbody>
                <Statistic name='good' clicks={good} />
                <Statistic name='neutral' clicks={neutral} />
                <Statistic name='bad' clicks={bad} />
                <Statistic name='all' clicks={all} />
                <Statistic name='average' clicks={(good - bad) / all} />
                <Percent name='positive' percent={good / all} />
            </tbody></table>
        </div>
    )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
