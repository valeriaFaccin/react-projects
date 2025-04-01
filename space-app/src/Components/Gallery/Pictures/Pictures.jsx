import favorite from "/icones/favorito.png";
import expand from "/icones/expandir.png";
import styled from "styled-components";

const PictureContainer = styled.div`
    .img {
        width: 448px;
    }
    
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
    }
    
    button {
        border: none;
        background-color: transparent;
    }
`;

const CaptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Pictures = ({ picture }) => {
    return (
        <PictureContainer>
            <figure>
                <img className={"img"} src={picture.path} alt={picture.titulo}/>
                <figcaption>
                    <h3>{picture.titulo}</h3>
                    <CaptionContainer>
                        <div><p>{picture.fonte}</p></div>
                        <div>
                            <button><img src={favorite}/></button>
                            <button><img src={expand}/></button>
                        </div>
                    </CaptionContainer>
                </figcaption>
            </figure>
        </PictureContainer>
    );
}

export default Pictures;
