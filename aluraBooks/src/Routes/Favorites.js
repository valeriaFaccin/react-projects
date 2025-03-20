import Search from "../components/Search";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Favorites() {
    return (
        <AppContainer>
            <Search />
        </AppContainer>
    );
}

export default Favorites;
