import "./Button.css";
import { ReactElement } from "react";

interface buttonProps {
    children: ReactElement | string
}

const Button = ({children}: buttonProps) => {
    return (
        <button className={"button"} >{children}</button>
    );
}

export default Button;
