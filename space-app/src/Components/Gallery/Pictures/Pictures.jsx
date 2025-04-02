import favorite from "/icones/favorito.png";
import expand from "/icones/expandir.png";
import styled from "styled-components";

const CaptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonIcon = styled.button`
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    img {
        width: 24px;
    }
`;

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 20px;
        
        h3 {
            font-size: 24px;
            font-weight: 600;
        }
        
        h4 {
            flex-grow: 1;
            font-size: 16px;
            font-weight: 400;
        }
        
        h3, h4 {
            margin: 0;
            font-family: "Gandhi", sans-serif;
        }
    }
`;

const Pictures = ({ picture }) => {
    return (
        <Figure>
            <img src={picture.path} alt={picture.titulo}/>
            <figcaption>
                <h3>{picture.titulo}</h3>
                <CaptionContainer>
                    <h4>{picture.fonte}</h4>
                    <ButtonIcon><img src={favorite} alt={"Favorite Icon"}/></ButtonIcon>
                    <ButtonIcon><img src={expand} alt={"Expand icon"}/></ButtonIcon>
                </CaptionContainer>
            </figcaption>
        </Figure>
    );
}

export default Pictures;
