import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Player from "Pages/Player/Player";
import NotFound from "Pages/NotFound/NotFound";
import BasePage from "Pages/BasePage/BasePage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favoritos" element={<Favorites />}></Route>
                    <Route path="/:id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
