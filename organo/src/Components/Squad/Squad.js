import "./Squad.css";
import Employee from "../Employee/Employee";

const Squad = ({employees, primaryColor, secondaryColor, name}) => {
    return (
        (employees.length > 0) && <section className={"squad-container"} style={{ backgroundColor: secondaryColor }}>
            <h1>{name}</h1>
            <div className={"title-underline"} style={{ borderColor: primaryColor }}></div>
            <div className={"employees-container"}>
                {employees.map((employee) => (
                    <Employee
                        key={employee.name}
                        cardBackground={primaryColor}
                        name={employee.name}
                        jobPosition={employee.jobPosition}
                        image={employee.imageInput}
                    />
                ))}
            </div>
        </section>
    );
}

export default Squad;
