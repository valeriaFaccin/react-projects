import Input from './Input';
import {useEffect, useState} from "react";
import styled from "styled-components";
import getALlBooks from "../Service/bookService";
import {postFavorite} from "../Service/favoriteService";

const SearchContainer = styled.section`
    width: 100%;
    color: #FFF;
    text-align: center;
    padding: 4rem 0;
`;
const SearchTitle = styled.p`
    width: 100%;
    color: #FFF;
    font-size: 26px;
    text-align: center;
    margin: 0;
`;
const SearchSubtitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    padding: 2rem 0;
    margin: 0;
`;
const ListBooks = styled.div`
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

function Search() {
    const [bookSearch, setBookSearch] = useState([]);
    const [booksData, setBooksData] = useState([]);

    async function fetchBooks() {
        const getBooks = await getALlBooks();
        setBooksData(getBooks);
    }

    async function insertFavoriteBook(id) {
        await postFavorite(id);
        alert("Book added to your list of Favorites!");
    }

    useEffect(() => {
        fetchBooks().then();
    }, []);

    return (
        <SearchContainer>
            <SearchTitle>Já sabe por onde começar?</SearchTitle>
            <SearchSubtitle>Encontre seu livro em nossa estante</SearchSubtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={
                    event => {
                        const text = event.target.value;
                        const searchResult = booksData.filter(book => book.name.includes(text));
                        setBookSearch(searchResult)
                    }
                }
            />
            <BooksContainer>
                { bookSearch.map(book =>
                    (
                        <ListBooks onClick={() => insertFavoriteBook(book.id)}>
                            <p>{book.name}</p>
                            <img src={book.src} alt={book.name} />
                        </ListBooks>
                    )
                ) }
            </BooksContainer>
        </SearchContainer>
    );
}

export default Search;
