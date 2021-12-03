import React from 'react'

export default function SecondWithParam(props) {
    const status = props.score >= 7 ? 'Approved' : 'Reproved'
    return (
        <div>
            <h2> {props.title} </h2>
            <p>
                <h2> {props.student} </h2>
                <h2> {props.score} </h2>
                <h2> {status} </h2>
            </p>
        </div>
    )
}