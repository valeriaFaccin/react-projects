import Title from './Title';
import cover from '../img/livro2.png';
import RecommendationCard from "./RecommendationCard";
import { newBooksReleases } from '../data/booksData';
import styled from 'styled-components';

const ReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;
const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function Releases() {
    return (
        <ReleasesContainer>
            <Title
                cor={"#EB9B00"}
                bold={"600"}
                fontSize={"36px"}
            >Últimos Lançamentos</Title>

            <NewBooksContainer>
                { newBooksReleases.map( book =>
                    <img src={book.src} alt={book.name} />
                )}
            </NewBooksContainer>
            <RecommendationCard
                title={"Talvez você se interesse por..."}
                subtitle={"Angular 11"}
                description={"Construindo uma aplicação integrada com a plataforma google."}
                img={cover}
            />
        </ReleasesContainer>
    );
}

export default Releases;
