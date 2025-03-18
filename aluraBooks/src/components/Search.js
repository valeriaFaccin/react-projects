import Input from './Input';
import styled from "styled-components";
import { useState } from "react";
import { booksData } from "../data/booksData.js";

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
`;

function Search() {
    const [bookSearch, setBookSearch] = useState([]);

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
                        <ListBooks>
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
