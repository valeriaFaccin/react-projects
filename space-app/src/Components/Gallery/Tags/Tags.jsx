import tags from "./tags.json";
import styled from "styled-components";

const ButtonTag = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 24px;
    height: 50px;
    padding: 12px;
    border: ${props => props.active ? "2px solid #7B78E5" : "none"};
    &:hover {
        border-color: #C98CF1;
    }
`;

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    width: 100%;
    padding: 56px 0 10px 0;
    
    div {
        display: flex;
        gap: 24px;
    }
    
    h3 {
        color: #D9D9D9;
        font-size: 24px;
        font-family: "GhandiSansRegular";
        font-weight: 400;
    }
`;

const Tags = () => {
    return (
        <TagContainer>
            <h3>Busque por tags: </h3>
            <div>
                {tags.map(tag => <ButtonTag active={true} key={tag.id}>{tag.titulo}</ButtonTag>)}
            </div>
        </TagContainer>
    );
}

export default Tags;
