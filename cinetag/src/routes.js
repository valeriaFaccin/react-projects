import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/Container/Container";
import Favorites from "./Pages/Favorites/Favorites";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    );
}

export default AppRoutes;
