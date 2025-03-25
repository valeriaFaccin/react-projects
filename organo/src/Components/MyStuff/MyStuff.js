import "./MyStuff.css";
import buttonImg from "../../img/addButton.png";
import {useState} from "react";
import {Form} from "../Form/Form";
import Squad from "../Squad/Squad";

const MyStuff = () => {

    const squads = [
        {
            name: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            name: 'Front-end',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            name: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            name: 'DevOps',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },
        {
            name: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            name: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            name: 'Inovação e Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF'
        }
    ]

    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const setNewEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    }

    return (
        <>
            <Form toShow={showForm} squadName={ squads.map(squad => squad.name) } registerNewEmployee={employee => setNewEmployee(employee)} />

            <div className={"my-stuff-container"}>
                <div className={"stuff-info"}>
                    <h1>Minha Organização:</h1>
                    <div className={"underline"}></div>
                </div>
                <div className={"stuff-btn"}>
                    <button className={"button-form"} onClick={() => setShowForm(showForm => !showForm)}>
                        <img src={buttonImg} alt={"Button add"}/>
                    </button>
                </div>
            </div>

            {squads.map((squad) =>
                <Squad
                    key={squad.name}
                    name={squad.name}
                    primaryColor={squad.primaryColor}
                    secondaryColor={squad.secondaryColor}
                    employees={employees.filter(employee => employee.squad === squad.name)}
                />
            )}
        </>
    );
}

export default MyStuff;
