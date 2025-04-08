// import style from "./Home.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";

const Home = () => {
    return (
        <>
            <Header />
            <Banner image={"home"} />
            <Title>
                <h1>A place to keep your movies and videos!</h1>
            </Title>
            <Card />
            <Footer />
        </>
    );
}

export default Home;
