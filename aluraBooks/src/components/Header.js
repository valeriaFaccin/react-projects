import Logo from "./Logo";
import OptionsMenu from "./OptionsMenu";
import IconsMenu from "./IconsMenu";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsMenu />
            <IconsMenu />
        </HeaderContainer>
    );
}

export default Header;
