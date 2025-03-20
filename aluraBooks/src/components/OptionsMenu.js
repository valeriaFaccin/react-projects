import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderMenu = styled.ul`
    display: flex;
    gap: 1rem;
`;
const MenuOptions = styled.li`
    text-transform: uppercase;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    /*text-align: center;*/
    height: 100%;
    padding: 0 0.5rem;
    cursor: pointer;
    min-width: 120px;
`;

const menuOptions = ['categorias', 'favorites', 'minha estante'];

function OptionsMenu() {
    return (
        <HeaderMenu>
            {
                menuOptions.map((option) => (
                    <Link to={`/${option}`}><MenuOptions><p>{option}</p></MenuOptions></Link>
                ))
            }
        </HeaderMenu>
    );
}

export default OptionsMenu;
