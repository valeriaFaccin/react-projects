import styled from "styled-components";
import {useEffect, useState} from "react";
import {deleteFavorite, getAllFavorites} from "../Service/favoriteService";
import bookCover from "../img/livro.png";
import Title from "../components/Title";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;
const ListBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.2);
    }
    
    p {
        font-weight: 500;
        color: #FFFFFF;
    }
    
    img {
        width: 60%;
    }
`;
const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    async function fetchFavorites() {
        const fav = await getAllFavorites();
        setFavorites(fav);
    }

    async function deleteFavoriteBook(id) {
        await deleteFavorite(id);
        fetchFavorites().then();
        alert("Book deleted from your list of Favorites!");
    }

    useEffect(() => {
        fetchFavorites().then();
    }, []);

    return (
        <AppContainer>
            <Title
                cor={"#EB9B00"}
                bold={"600"}
                fontSize={"30px"}
            >Favoritos</Title>
            <BooksContainer>
                { favorites.map( fav => (
                    <ListBook onClick={() => deleteFavoriteBook(fav.id)}>
                        <p>{fav.name}</p>
                        <img src={bookCover} alt={fav.name}/>
                    </ListBook>
                ))}
            </BooksContainer>
        </AppContainer>
    );
}

export default Favorites;
