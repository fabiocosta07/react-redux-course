import If from "./If"

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                <p>Welcome <strong>{user.name}</strong></p>
            </If>
            <If test={user && user.name}>
                <p> Welcome Big friend!</p>
            </If>            
        </div>
    )
}