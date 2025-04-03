import Title from "../Title/Title.jsx";
import Pictures from "./Pictures/Pictures.jsx";
import styled from "styled-components";

const PopularContainer = styled.div`
    img {
        margin-bottom: 24px;
        border-radius: 10px;
        width: 100%;
    }
    
    button {
        background-color: transparent;
        border-radius: 10px;
        border: 2px solid #C98CF1;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        font-family: "Gandhi", sans-serif;
        padding: 14px 30px;
        width: 100%;
    }
`;

const Popular = () => {
    return (
        <PopularContainer>
            <Title style={{textAlign: "center"}} align={"center"} >Populares</Title>
            <img src={"/imagens/populares/foto-1.png"} />
            <img src={"/imagens/populares/foto-2.png"} />
            <img src={"/imagens/populares/foto-3.png"} />
            <img src={"/imagens/populares/foto-4.png"} />
            <img src={"/imagens/populares/foto-5.png"} />
            <button>Ver mais</button>
        </PopularContainer>
    );
}

export default Popular;
