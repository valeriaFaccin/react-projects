import "./dropdownField.css";

const DropdownField = ({isAltered, isRequired, label, value, items}) => {
    const theresChange = (event) => {
        isAltered(event.target.value);
    }

    return (
        <div className={"dropdown-container"}>
            <label>{label}</label>
            <select
                required={isRequired}
                value={value}
                onChange={theresChange}
            >
                <option value={""} ></option>
                {items.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    );
}

export default DropdownField;
