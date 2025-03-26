import "./Input.css";

const Input = ({ isAltered, isRequired, type="text", label, value, placeholder }) => {
    const theresChange = (event) => {
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
