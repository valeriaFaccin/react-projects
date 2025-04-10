import "./dropdownField.css";
import React from "react";

interface dropdownFieldProps {
    isAltered: (value: string) => void,
    isRequired: boolean,
    label: string,
    value: string,
    items: string[]
}

const DropdownField = ({ isAltered, isRequired, label, value, items }: dropdownFieldProps) => {
    const theresChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
