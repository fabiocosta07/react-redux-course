import FamilyMember from "./FamilyMember"

export default props => {
    return (
        <div>
            <FamilyMember name="Ze" {...props} ></FamilyMember>
            <FamilyMember name="Joao" surname={props.surname} ></FamilyMember>
        </div>
    )   
}