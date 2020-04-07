import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Display = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div>{props.anecdote}</div>
            <div>has {props.numPoints} votes</div>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const randHandler = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const pointHandler = () => {
        const copyPoints = [ ...points ]
        copyPoints[selected] += 1
        setPoints(copyPoints)
    }

    let maxIndex = points.indexOf(Math.max(...points))

    return (
        <div>
            <Display heading='Anecdote of the day' anecdote={props.anecdotes[selected]} numPoints={points[selected]} />
            <Button handleClick={pointHandler} text='vote' />
            <Button handleClick={randHandler} text='next anecdote' /> 
            <Display heading='Anecdote with most votes' anecdote={props.anecdotes[maxIndex]} numPoints={points[maxIndex]} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);
