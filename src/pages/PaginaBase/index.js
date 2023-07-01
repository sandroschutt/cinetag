import { Outlet } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Footer from "components/Footer";
import FavoritosProvider from "../../context/Favoritos";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}