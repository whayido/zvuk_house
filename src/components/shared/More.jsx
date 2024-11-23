import styles from "./_more.module.scss";
import classNames from "classnames";
export default function Mixing() {
  return (
    <>
      <main className={styles.content}>
        <div className={styles.aside}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              ЗВУК <span className={styles.house}>ХАУС</span>
            </h1>
            <p className={styles.desc}>
              С момента запуска нашего проекта мы накопили значительный опыт,
              который применяем для каждого нашего клиента.
            </p>
            <h1 className={classNames(styles.title, styles.heading)}>
              МЫ <span className={styles.music}>МУЗЫКА</span>
            </h1>
          </div>
          <div className={styles.side}>
            <div className={classNames(styles.container, styles.right_top)}>
              <p className={styles.desc_right}>
                Студия помогает реализовать авторские проекты, поддерживать идеи
                молодых и опытных творцов, а также содействовать их продвижению.
              </p>
            </div>
            <div className={classNames(styles.container, styles.center)}>
              <p className={styles.desc_right}>
                С 2018 года, предоставляет услуги записи и звукорежиссуры для
                всех желающих в Норильске.
              </p>
            </div>
            <div className={classNames(styles.container, styles.bottom)}>
              {" "}
              <p className={styles.desc_right}>
                Она стала местом силы и притяжения для творческих людей в
                городе, объединяя их вокруг музыки и искусства.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
