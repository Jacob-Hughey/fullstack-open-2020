import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce(function (a, b) {
        return {exercises: a.exercises + b.exercises}
    }).exercises

    return (
        <>
            <b>total of { total } exercises</b>
        </>
    )
}

export default Total
