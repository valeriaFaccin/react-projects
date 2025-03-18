import styled from "styled-components";

const Title = styled.p`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || "#000000"};
    font-weight: ${props => props.bold || "400"};
    font-size: ${props => props.fontSize || "16px"};
    text-align: ${props => props.textAlign || "center"};
    text-transform: uppercase;
    margin: 0;
`;

export default Title;
