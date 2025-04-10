import "./Squad.css";
import Employee from "../Employee/Employee";
import hexToRgba from "hex-to-rgba";
import { IEmployee } from "../../shared/Interface/IEmployee";
import { ISquad } from "../../shared/Interface/ISquad";

interface squadProps {
    squad: ISquad,
    changeColor: (id: string, color: string) => void,
    employees: IEmployee[],
}

const Squad = ({ squad, changeColor, employees }: squadProps) => {

    return (
        (employees.length > 0) && <section className={"squad-container"} style={{ backgroundColor: hexToRgba(squad.primaryColor, 0.2) }}>
            <input
                type={"color"}
                value={squad.primaryColor}
                className={"squad-color-input"}
                onChange={event => changeColor(squad.id, event.target.value)}
            />
            <h1>{squad.name}</h1>
            <div className={"title-underline"} style={{ borderColor: squad.primaryColor }}></div>
            <div className={"employees-container"}>
                {employees.map((employee) => (
                    <Employee
                        key={employee.name}
                        cardBackground={squad.primaryColor}
                        employee={employee}
                    />
                ))}
            </div>
        </section>
    );
}

export default Squad;
