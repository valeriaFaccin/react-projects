import Banner from "./Components/Banner/Banner"
import MyStuff from "./Components/MyStuff/MyStuff";
import Footer from "./Components/Footer/Footer";
import banner from "./img/banner.png";

function App() {

    return (
        <div className="App">
            <Banner imgSrc={banner} imgAlt={"Header banner"} />
            <MyStuff />
            <Footer />
        </div>
    );
}

export default App;
