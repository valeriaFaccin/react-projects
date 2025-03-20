import Logo from "./Logo";
import OptionsMenu from "./OptionsMenu";
import IconsMenu from "./IconsMenu";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}><Logo /></Link>
            <OptionsMenu />
            <IconsMenu />
        </HeaderContainer>
    );
}

export default Header;
