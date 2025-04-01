import { styled } from 'styled-components';
import GlobalStyles from "./Components/GlobalStyles/index.jsx";
import Header from "./Components/Header/Header.jsx";
import AsideMenu from "./Components/AsideMenu/AsideMenu.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import bannerImage from "./assets/banner.png";
import Gallery from "./Components/Gallery/Gallery.jsx";
import pictures from "./fotos.json";
import {useState} from "react";

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

    return (
        <GradientBackground>
            <GlobalStyles />
            <AppContainer>
                <Header />
                <MainContainer>
                    <AsideMenu />
                    <GalleryContainer>
                        <Banner image={bannerImage} text={"A galeria mais completa de fotos do espaço!"} />
                        <Gallery pictures={picture} />
                    </GalleryContainer>
                </MainContainer>
            </AppContainer>
        </GradientBackground>
    );
}

export default App;
