import "./MyStuff.css";
import buttonImg from "../../img/addButton.png";
import Form from "../Form/Form";
import Squad from "../Squad/Squad";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const MyStuff = () => {

    const squadsConfig = [
        {
            id: uuidv4(),
            name: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            id: uuidv4(),
            name: 'Front-end',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            id: uuidv4(),
            name: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            id: uuidv4(),
            name: 'DevOps',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },
        {
            id: uuidv4(),
            name: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            id: uuidv4(),
            name: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            id: uuidv4(),
            name: 'Inovação e Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF'
        }
    ];

    const [squads, setSquads] = useState(squadsConfig);

    const initialSquads = [
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[0].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[0].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[0].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[0].name
        },
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[1].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[1].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[1].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[1].name
        },
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[2].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[2].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[2].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[2].name
        },
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[3].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[3].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[3].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[3].name
        },
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[4].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[4].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[4].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[4].name
        },
        {
            id: uuidv4(),
            name: 'Juliana Amoasei',
            jobPosition: 'Desenvolvedora de software e instrutora',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            squad: squads[5].name
        },
        {
            id: uuidv4(),
            name: 'Daniel Artine',
            jobPosition: 'Engenheiro de Software na Stone Age',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            squad: squads[5].name
        },
        {
            id: uuidv4(),
            name: 'Guilherme Lima',
            jobPosition: 'Desenvolvedor Python e JavaScript na Alura',
            imageInput: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            squad: squads[5].name
        },
        {
            id: uuidv4(),
            name: 'Paulo Silveira',
            jobPosition: 'Hipster e CEO da Alura',
            imageInput: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            squad: squads[5].name
        },
    ];

    const [employees, setEmployees] = useState(initialSquads);
    const [showForm, setShowForm] = useState(false);

    const setNewEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    }

    const deleteEmployee = () => {
        console.log('Employee Deleted');
    }

    const changeSquadColor = (name, color) => {
        setSquads(
            squads.map((squad) => {
                if (squad.name === name) {
                    squad.primaryColor = color;
                }
                return squad;
            })
        );
    }

    return (
        <>
            <Form
                toShow={showForm}
                squadName={ squads.map(squad => squad.name) }
                registerNewEmployee={employee => setNewEmployee(employee)}
            />

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
                    squad={squad}
                    employees={employees.filter(employee => employee.squad === squad.name)}
                    toDelete={deleteEmployee}
                    changeColor={changeSquadColor}
                />
            )}
        </>
    );
}

export default MyStuff;
