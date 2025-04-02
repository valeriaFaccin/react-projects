import styled from "styled-components";
import Title from "../Title/Title.jsx";
import Tags from "./Tags/Tags.jsx";
import Popular from "./Popular.jsx";
import Pictures from "./Pictures/Pictures.jsx";

const GallerySection = styled.section`
    display: flex;
`;

const GalleryNavigation = styled.div`
    flex-grow: 1;
`;

const PicturesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1.5rem;
`;

const Gallery = ({ pictures }) => {
    return (
        <>
            <Tags />
            <GallerySection>
                <GalleryNavigation>
                    <Title>Navegue pela galeria</Title>
                    <PicturesContainer>
                        {pictures.map(picture => (<Pictures picture={picture} />))}
                    </PicturesContainer>
                </GalleryNavigation>
                <Popular />
            </GallerySection>
        </>
    );
}

export default Gallery;
