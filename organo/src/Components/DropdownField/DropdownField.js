import "./dropdownField.css";

const DropdownField = (props) => {
    return (
        <div className={"dropdown-container"}>
            <label>{props.label}</label>
            <select required={props.isRequired}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropdownField;
