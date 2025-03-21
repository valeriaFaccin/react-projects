import bannerImg from '../../img/banner.png';
import "./Banner.css";

const Banner = () => {
    return (
        <header className={"banner"}>
            <img src={bannerImg} alt={"Header banner"} />
        </header>
    );
}

export default Banner;
