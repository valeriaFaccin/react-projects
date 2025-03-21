import "./Input.css";

export const Input = (props) => {
    return (
        <div className={"input-container"}>
            <label>{props.label}</label>
            <input required={props.isRequired} placeholder={props.placeholder} />
        </div>
    );
}
