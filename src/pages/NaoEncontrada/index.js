import styles from "./NaoEncontrada.module.scss";

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado...</p>
        </section>
    )
}