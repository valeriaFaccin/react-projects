import { styled } from 'styled-components';

const Item = styled.li`
    display: flex;
    gap: 18px;
    align-items: center;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$active ? 'GhandiSansBold' : 'GhandiSansRegular' };
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
`;

const ItemList = ({ children, isActive, isInactive, active = false }) => {
    return (
        <Item $active={active}>
            <img src={active ? isActive : isInactive} alt={`${children} icon`} />
            {children}
        </Item>
    );
}

export default ItemList;
