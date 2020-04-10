import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    const allParts = parts.map(currPart => 
        <Part key={currPart.id} title={currPart.name} exercises={currPart.exercises} />
    )

    return allParts
}

export default Content
