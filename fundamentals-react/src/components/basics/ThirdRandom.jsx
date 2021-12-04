export default (props) => {
    const { max, min } = props
    const result = parseInt(Math.random() * (max - min) + min)
    return (
        <h2>{result}</h2>
    )
}