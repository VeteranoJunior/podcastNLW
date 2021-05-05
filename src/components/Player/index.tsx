

import styles from "./styles.module.scss";

export function Player() {


  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong> Tocando agora </strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.emptySlider} />
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>

        <button type="button">
            <img src="/shuffle.svg" alt="embaralhar" />
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button className={styles.playbutton} type="button">
            <img src="/play.svg" alt="play" />
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="Tocar proxima" />
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>


        </div>
      </footer>
    </div>
  );
}