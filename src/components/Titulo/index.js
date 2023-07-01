import styles from "./Titutolo.module.scss";

export default function Titulo({ children }) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    )
}