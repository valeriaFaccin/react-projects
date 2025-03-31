import { styled } from 'styled-components';
import ItemList from "./ItemList.jsx";

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const AsideMenu = () => {
    return (
        <aside>
            <nav>
                <ListContainer>
                    <ItemList
                        active={true}
                        isActive={"/icones/home-ativo.png"}
                        isInactive={"/icones/home-inativo.png"}
                    >
                        Home
                    </ItemList>
                    <ItemList
                        isActive={"/icones/mais-vistas-ativo.png"}
                        isInactive={"/icones/mais-vistas-inativo.png"}
                    >
                        Mais vistas
                    </ItemList>
                    <ItemList
                        isActive={"/icones/mais-curtidas-ativo.png"}
                        isInactive={"/icones/mais-curtidas-inativo.png"}
                    >
                        Mais curtidas
                    </ItemList>
                    <ItemList
                        isActive={"/icones/novas-ativo.png"}
                        isInactive={"/icones/novas-inativo.png"}
                    >
                        Novas
                    </ItemList>
                    <ItemList
                        isActive={"/icones/surpreenda-me-ativo.png"}
                        isInactive={"/icones/surpreenda-me-inativo.png"}
                    >
                        Surpreenda-me
                    </ItemList>
                </ListContainer>
            </nav>
        </aside>
    );
}

export default AsideMenu;
