import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    padding: 10px 40px;
    border-radius: 20px;
    width: 30%;
    color: #FFF;
    font-size: 16px;
    text-align: center;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`;

export default Input;