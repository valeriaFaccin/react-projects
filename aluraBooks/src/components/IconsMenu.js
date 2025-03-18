import profile from "../img/perfil.svg";
import cart from "../img/sacola.svg";
import styled from 'styled-components';

const HeaderIcons = styled.ul`
    display: flex;
    align-items: center;
    gap: 3rem;
`;
const Icon = styled.li`
    width: 1.5rem;
    cursor: pointer;
`;

const iconOptions = [profile, cart];

function IconsMenu() {
    return (
        <HeaderIcons>
            {
                iconOptions.map((option) => (
                    <Icon><img src={option} alt="Icone"/></Icon>
                ))
            }
        </HeaderIcons>
    );
}

export default IconsMenu;