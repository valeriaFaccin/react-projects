import "./form.css";
import Input from "../Input/Input";
import DropdownField from "../DropdownField/DropdownField";
import Button from "../Button/Button";
import {useState} from "react";

const Form = ({toShow, registerNewEmployee, squadName}) => {

    const [name, setName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [imageInput, setInputImage] = useState('');
    const [squad, setSquad] = useState('');

    const toSave = (event) => {
        event.preventDefault();
        registerNewEmployee({
            name,
            jobPosition,
            imageInput,
            squad
        });
        setName('');
        setJobPosition('');
        setInputImage('');
        setSquad('');
    }

    return (
        (toShow) && <section className={"form-container"}>
            <form onSubmit={toSave} className={"form-elements"}>
                <p>Preencha os dados para criar o Card do colaborador.</p>
                <Input
                    isRequired={true}
                    label={"Nome"}
                    placeholder={"Digite seu nome"}
                    value={name}
                    isAltered={value => setName(value)}
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
            </form>
        </section>
    );
}

export default Form;
