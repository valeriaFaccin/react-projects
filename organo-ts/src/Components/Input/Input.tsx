import "./Input.css";
import React from "react";

interface inputProps {
    isAltered: (value: string) => void,
    isRequired: boolean,
    type?: string,
    label: string,
    value: string,
    placeholder?: string
}

const Input = ({ isAltered, isRequired, type="text", label, value, placeholder }: inputProps) => {
    const theresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        isAltered(event.target.value);
    }

    return (
        <div className={"input-container"}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={theresChange}
                required={isRequired}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
