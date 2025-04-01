import styled from "styled-components";

const BannerContainer = styled.div`
    background-image: ${props => `url(${props.$image})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 20px;
    max-height: 330px;
    margin: 0;
`;

const Headline = styled.p`
    color: #FFFFFF;
    font-family: "Gandhi", sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
    padding: 28px 64px;
    max-width: 300px;
`;

const Banner = ({ image, text }) => {
    return (
        <BannerContainer $image={image}>
            <Headline>{text}</Headline>
        </BannerContainer>
    );
}

export default Banner;
