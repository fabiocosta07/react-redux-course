import students from "../../data/students"

export default props => {
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {students.map((s) => {
                    return (
                        <li key={s.id}> {s.name} -> {s.score} </li>                    
                    )
                })}
            </ul>
        </div>
    )
}