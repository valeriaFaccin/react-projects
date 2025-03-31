import { styled } from 'styled-components';
import GlobalStyles from "./Components/GlobalStyles/index.jsx";
import Header from "./Components/Header/Header.jsx";
import AsideMenu from "./Components/AsideMenu/AsideMenu.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import banner from "./assets/banner.png";

const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    margin: 0 24px;
    max-width: 100%;
`;

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`;

function App() {
    return (
        <GradientBackground>
            <GlobalStyles />
            <AppContainer>
                <Header />
                <MainContainer>
                    <AsideMenu />
                    <Banner $image={banner} text={"A galeria mais completa de fotos do espaço!"} />
                </MainContainer>
            </AppContainer>
        </GradientBackground>
    );
}

export default App;
