import Banner from "../../Components/Banner/Banner";
import {Outlet} from "react-router";

const Main = () => {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    );
}

export default Main;
