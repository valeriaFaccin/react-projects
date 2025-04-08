import styles from "./Favorites.module.css";
import Banner from "../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";

const Favorites = () => {
    return (
        <>
            <Banner imagem='favoritos' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
            </section>
        </>
    );
}

export default Favorites;
