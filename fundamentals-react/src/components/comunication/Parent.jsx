import { useState } from "react"
import IndirectChild from "./IndirectChild"

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)

    const provideInfo = (name, age) => {
        setName(name)
        setAge(age)
    }

    return (
        <div>
            <span> {name}</span>
            <span> {age}</span>            
            <IndirectChild whenClick={provideInfo}></IndirectChild>
        </div>
    )
}