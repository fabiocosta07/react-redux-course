import FamilyMember from "./FamilyMember"

export default props => {
    return (
        <div>
            <FamilyMember name="Ze" {...props} ></FamilyMember>
            <FamilyMember name="Joao" {...props} ></FamilyMember>
        </div>
    )   
}