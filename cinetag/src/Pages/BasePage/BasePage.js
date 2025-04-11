import Header from "Components/Header/Header";
import Container from "Components/Container/Container";
import Footer from "Components/Footer/Footer";
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    );
}

export default BasePage;
