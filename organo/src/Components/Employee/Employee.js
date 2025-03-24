import "./Employee.css";

const Employee = ({cardBackground, name, jobPosition, image}) => {
    return (
        <div className={"employee-container"}>
            <div style={{backgroundColor: cardBackground, borderRadius: "10px 10px 0 0", height: "90px"}}>
                <img className={"profile-picture"} src={image} alt={name} />
            </div>
            <div className={"info-container"}>
                <h4>{name}</h4>
                <h6>{jobPosition}</h6>
            </div>
        </div>
    );
}

export default Employee;
