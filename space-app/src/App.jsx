import { styled } from 'styled-components';
import GlobalStyles from "./Components/GlobalStyles/index.jsx";
import Header from "./Components/Header/Header.jsx";
import AsideMenu from "./Components/AsideMenu/AsideMenu.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import bannerImage from "./assets/banner.png";
import Gallery from "./Components/Gallery/Gallery.jsx";
import pictures from "./fotos.json";
import {useEffect, useState} from "react";
import ModalPicture from "./Components/ModalPicture/ModalPicture.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
`;

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`;

const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const App = () => {
    const [picture, setPicture] = useState(pictures);
    const [selectedPicture, setSelectedPicture] = useState(null);

    useEffect(() => {
        setPicture(pictures.filter(pic => {
            return {}
        }))
    }, []);

    const onToggleFavorite = (selectedPic) => {
        if(selectedPic.id === selectedPicture?.id) {
            setSelectedPicture(selectedPicture.map(pic => {
                return {
                    ...pic,
                    favorite: !selectedPicture.favorite
                }
            }));
        }

        setPicture(picture.map(pic => {
            return {
                ...pic,
                favorite: pic.id === selectedPic.id ? !selectedPic.favorite : pic.favorite
            }
        }));
    }

    return (
        <GradientBackground>
            <GlobalStyles />
            <AppContainer>
                <Header />
                <MainContainer>
                    <AsideMenu />
                    <GalleryContainer>
                        <Banner image={bannerImage} text={"A galeria mais completa de fotos do espaço!"} />
                        <Gallery onSelectedPicture={picture => setSelectedPicture(picture)} onToggleFavorite={onToggleFavorite} pictures={picture} />
                    </GalleryContainer>
                </MainContainer>
            </AppContainer>
            <Footer />
            <ModalPicture picture={selectedPicture} onToggleFavorite={onToggleFavorite} />
        </GradientBackground>
    );
}

export default App;
