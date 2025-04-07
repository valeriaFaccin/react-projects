import styled from 'styled-components';
import fb from "/imagens/sociais/facebook.svg";
import ig from "/imagens/sociais/instagram.svg";
import tw from "/imagens/sociais/twitter.svg";

const FooterContainer = styled.footer`
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    margin-top: 73px;
    
    div {
        display: flex;
        gap: 34px;
    }
    
    p {
        margin: 0;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 500;
        font-family: "Gandhi", sans-serif;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <a href={"https://www.google.com"}><img src={fb} alt={"Facebook Icon"} /></a>
                <a href={"https://www.google.com"}><img src={ig} alt={"Instagram Icon"} /></a>
                <a href={"https://www.google.com"}><img src={tw} alt={"Twitter Icon"} /></a>
            </div>
            <p>Desenvolvido por Alura.</p>
        </FooterContainer>
    );
}

export default Footer;
