import "./form.css";
import Input from "../Input/Input";
import DropdownField from "../DropdownField/DropdownField";
import Button from "../Button/Button";
import hexToRgba from "hex-to-rgba";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ toShow, registerNewEmployee, squadName, registerNewSquad }) => {

    const [employeeName, setEmployeeName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [imageInput, setInputImage] = useState('');
    const [squad, setSquad] = useState('');

    const [squadNomination, setSquadNomination] = useState('');
    const [primaryColor, setPrimaryColor] = useState('');

    const [switchForm, setSwitchForm] = useState(true);

    const toSaveEmployee = (event) => {
        event.preventDefault();
        registerNewEmployee({
            id: uuidv4(),
            name: employeeName,
            jobPosition: jobPosition,
            imageInput: imageInput,
            squad: squad
        });
        setEmployeeName('');
        setJobPosition('');
        setInputImage('');
        setSquad('');
    }

    const toSaveSquad = (event) => {
        event.preventDefault();
        registerNewSquad({
            id: uuidv4(),
            name: squadNomination,
            primaryColor: primaryColor,
            secondaryColor: hexToRgba(primaryColor, 0.2)
        });
        setSquadNomination('');
        setPrimaryColor('');
    }

    return (
        (toShow) && <section className={"form-container"}>
            <div className={"tab-container"}>
                <button
                    id={"employee-tab"}
                    onClick={(event) => setSwitchForm((event.target.id === 'employee-tab'))}
                >Novo Colaborador</button>
                <button
                    id={"squad-tab"}
                    onClick={(event) => setSwitchForm((event.target.id === 'employee-tab'))}
                >Novo Time</button>
            </div>

            {(switchForm) && <form onSubmit={toSaveEmployee} className={"form-elements"}>
                <p>Preencha os dados para criar o Card do colaborador.</p>
                <Input
                    isRequired={true}
                    label={"Nome"}
                    placeholder={"Digite seu nome"}
                    value={employeeName}
                    isAltered={value => setEmployeeName(value)}
                />
                <Input
                    isRequired={true}
                    label={"Cargo"}
                    placeholder={"Digite seu cargo"}
                    value={jobPosition}
                    isAltered={value => setJobPosition(value)}
                />
                <Input
                    isRequired={true}
                    label={"Imagem"}
                    placeholder={"Informe o endereço da imagem"}
                    value={imageInput}
                    isAltered={value => setInputImage(value)}
                />
                <DropdownField
                    isRequired={true} label={"Time"}
                    items={squadName}
                    value={squad}
                    isAltered={value => setSquad(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>}

            {!(switchForm) && <form onSubmit={toSaveSquad} className={"form-elements"}>
                <p>Preencha os dados para criar um novo time.</p>
                <Input
                    isRequired={true}
                    label={"Nome"}
                    placeholder={"Digite o nome do Novo Time"}
                    value={squadNomination}
                    isAltered={value => setSquadNomination(value)}
                />
                <Input
                    isRequired={true}
                    label={"Cor"}
                    placeholder={"Digite a cor padrão em Hexadecimal"}
                    value={primaryColor}
                    isAltered={value => setPrimaryColor(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>}
        </section>
    );
}

export default Form;
