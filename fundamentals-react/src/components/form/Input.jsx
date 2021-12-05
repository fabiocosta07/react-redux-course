import { useState } from "react"

export default props => {
    const [value, setValue] = useState("Inicial")

    const whenChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}> 
            <input value={value} onChange={whenChange}></input>
            <input value={value} readOnly></input>
            <input value={undefined} ></input>
        </div>
    )
}