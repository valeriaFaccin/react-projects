import styles from "./Favorites.module.css";
import Banner from "../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import {useFavoriteContext} from "../../contexts/Favorites";

const Favorites = () => {
    const {favorites} = useFavoriteContext();

    return (
        <>
            <Banner imagem='favoritos' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorites.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    );
}

export default Favorites;
