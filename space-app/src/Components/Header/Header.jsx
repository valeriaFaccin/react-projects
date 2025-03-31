import { styled } from 'styled-components';
import SearchInput from "../SearchInput/SearchInput.jsx";

const HeaderContainer = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img {
        max-width: 212px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src={"/imagens/logo.png"} alt={"Space App Logo"} />
            <SearchInput />
        </HeaderContainer>
    );
}

export default Header;
