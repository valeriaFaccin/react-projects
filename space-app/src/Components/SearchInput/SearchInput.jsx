import { styled } from "styled-components";
import search from '../../assets/lupa.png';

const InputContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const Input = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    font-family: "GhandiSansRegular";
    line-height: 20px;
`;

const InputIcon = styled.img`
    position: absolute;
    top: 18px;
    right: 15px;
    height: 19px;
    width: 19px;
`;

const SearchInput = (props) => {
    return (
        <InputContainer>
            <Input placeholder="O que você procura?" {...props} />
            <InputIcon src={search} alt="Search Icon" />
        </InputContainer>
    )
}

export default SearchInput;
