import "./Squad.css";
import Employee from "../Employee/Employee";
import hexToRgba from "hex-to-rgba";
import {useEffect, useState} from "react";

const Squad = ({ employees, squad, toDelete, changeColor }) => {

    const [squadBgColor, setSquadBgColor] = useState(squad.secondaryColor);

    useEffect(() => {
        setSquadBgColor(hexToRgba(squad.primaryColor, 0.2));
    }, [squad.primaryColor]);

    return (
        (employees.length > 0) && <section className={"squad-container"} style={{ backgroundColor: squadBgColor }}>
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
                        toDelete={toDelete}
                    />
                ))}
            </div>
        </section>
    );
}

export default Squad;
