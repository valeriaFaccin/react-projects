import logo from '../img/logo.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: flex;
    font-size: 30px;
    gap: 0.625rem;
`;

function Logo() {
    return (
        <LogoWrapper>
            <img src={logo} alt="Logo AluraBooks"/>
            <p><strong>Alura</strong>Books</p>
        </LogoWrapper>
    );
}

export default Logo;
