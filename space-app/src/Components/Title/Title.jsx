import styled from 'styled-components';

const Title = styled.h1`
    font-size: 32px;
    font-family: "GhandiSansRegular";
    color: #7B78E5;
    font-weight: 400;
    text-align: ${props => props.$align ? props.$align : 'left'};
`;

export default Title;
