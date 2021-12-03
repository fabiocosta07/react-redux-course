import React from 'react'

export default function SecondWithParam(params) {
    return (
        <div>
            <h2> {params.title} </h2>
            <h2> {params.subtitle} </h2>
        </div>
    )
}