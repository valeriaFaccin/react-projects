import "./Banner.css";

interface bannerProps {
    imgSrc: string,
    imgAlt?: string
}

const Banner = ({ imgSrc, imgAlt }: bannerProps) => {
    return (
        <header className={"banner"}>
            <img src={imgSrc} alt={imgAlt} />
        </header>
    );
}

export default Banner;
