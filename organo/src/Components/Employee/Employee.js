import "./Employee.css";
import {themeContext} from "../MyStuff/MyStuff";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {useContext} from "react";

const Employee = ({ cardBackground, employee }) => {
    const {deleteEmployee, setFavoriteEmployee} = useContext(themeContext);

    const changeFavorite = () => {
        setFavoriteEmployee(employee.id);
    }

    const propsFavorite = {
        size: "25px",
        cursor: "pointer",
        onClick: changeFavorite
    }

    const deleteSomeone = () => {
        deleteEmployee(employee.id);
    }

    const propsDelete = {
        size: "25px",
        cursor: "pointer",
        color: "#aa0707",
        onClick: deleteSomeone
    }

    return (
        <div className={"employee-container"}>
            <AiFillCloseCircle
                className={"deleteBUTTON-catchTheIRONY"}
                {...propsDelete}
            />
            <div style={{backgroundColor: cardBackground, borderRadius: "10px 10px 0 0", height: "90px"}}>
                <img className={"profile-picture"} src={employee.imageInput} alt={employee.name}/>
                <div className={"favorite-container"}>
                    {(employee.favorite) ? <AiFillHeart {...propsFavorite} color={"#FFD700"}/> :
                        <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>
            <div className={"info-container"}>
                <h4>{employee.name}</h4>
                <h6>{employee.jobPosition}</h6>
            </div>
        </div>
    );
}

export default Employee;
