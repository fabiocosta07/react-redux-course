export default props => {
    return (
        <div>
            <button onClick={e => {
                props.whenClick('Joao', 34)
            }}>provide info</button>
        </div>
    )
}