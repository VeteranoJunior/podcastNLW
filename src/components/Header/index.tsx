import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcast Logo" />
      <p>O Melhor para você ouvir, sempre!</p>

      <span> Qua, 5 Maio</span>
    </header>
  );
}