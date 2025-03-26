import "./Employee.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Employee = ({ cardBackground, employee, toDelete }) => {
    return (
        <div className={"employee-container"}>
            <AiFillCloseCircle
                className={"deleteBUTTON-catchTheIRONY"}
                size={25}
                color={"#aa0707"}
                cursor={"pointer"}
                onClick={() => toDelete(employee.id)}
            />
            <div style={{backgroundColor: cardBackground, borderRadius: "10px 10px 0 0", height: "90px"}}>
                <img className={"profile-picture"} src={employee.imageInput} alt={employee.name} />
            </div>
            <div className={"info-container"}>
                <h4>{employee.name}</h4>
                <h6>{employee.jobPosition}</h6>
            </div>
        </div>
    );
}

export default Employee;
