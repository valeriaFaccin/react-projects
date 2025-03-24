import "./Input.css";

const Input = ({isAltered, isRequired, label, value, placeholder}) => {
    const theresChange = (event) => {
        isAltered(event.target.value);
    }

    return (
        <div className={"input-container"}>
            <label>{label}</label>
            <input
                value={value}
                onChange={theresChange}
                required={isRequired}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
