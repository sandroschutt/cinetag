import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Player.module.scss";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Player() {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/sandroschutt/cinetag-api/videos?id=${parametros.id}`).then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
