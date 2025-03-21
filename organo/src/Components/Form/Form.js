import "./form.css";
import {Input} from "../Input/Input";
import DropdownField from "../DropdownField/DropdownField";
import Button from "../Button/Button";

export const Form = () => {
    const dropdownOptions = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const toSave = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    }

    return (
        <section className={"form-container"}>
            <form onSubmit={toSave} className={"form-elements"}>
                <p>Preencha os dados para criar o Card do colaborador.</p>
                <Input isRequired={true} label={"Nome"} placeholder={"Digite seu nome"}/>
                <Input isRequired={true} label={"Cargo"} placeholder={"Digite seu cargo"}/>
                <Input isRequired={true} label={"Imagem"} placeholder={"Informe o endereço da imagem"}/>
                <DropdownField isRequired={true} label={"Time"} itens={dropdownOptions} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}
