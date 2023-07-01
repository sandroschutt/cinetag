import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Favoritos.module.scss";

export default function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
        })}
      </section>
    </>
  );
}
