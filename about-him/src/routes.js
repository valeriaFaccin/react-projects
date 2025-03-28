import {BrowserRouter, Route, Routes} from "react-router";
import Main from "./Routes/Main/Main";
import Home from "./Routes/Home/Home";
import AboutHim from "./Routes/AboutHim/AboutHim";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Post from "./Routes/Post/Post";
import NotFound from "./Routes/NotFound/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="abouthim" element={<AboutHim />} />
                    <Route path="post/:id" element={<Post />} />
                </Route>
                <Route path={"*"} element={<NotFound />} />
                {/*<Route path={"*"} element={<div>I think somewhere you lost yourself</div>} />*/}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
