import Banner from "./Components/Banner/Banner"
import {Form} from "./Components/Form/Form";
import {useState} from "react";
import Squad from "./Components/Squad/Squad";
import Footer from "./Components/Footer/Footer";

function App() {
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

    const setNewEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    }

    return (
        <div className="App">
            <Banner />
            <Form squadName={ squads.map(squad => squad.name) } registerNewEmployee={employee => setNewEmployee(employee)} />
            {squads.map((squad) =>
                <Squad
                    key={squad.name}
                    name={squad.name}
                    primaryColor={squad.primaryColor}
                    secondaryColor={squad.secondaryColor}
                    employees={employees.filter(employee => employee.squad === squad.name)}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
