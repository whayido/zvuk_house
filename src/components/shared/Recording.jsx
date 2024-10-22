import styles from "./Rec.module.scss";
import Image from "next/image";
import classNames from "classnames";
export default function Recording() {
  return (
    <>
      <main className={styles.content}>
        <h1 className={styles.title}>ЗАПИСЬ ПЕСНИ</h1>
        <div className={styles.side}>
          <div className={styles.text}>
            <p className={styles.desc}>
              Студия звукозаписи "Звук Хаус" предлагает
              <br /> услуги профессиональной записи песен
              <br /> в высококачественных условиях.
            </p>
            <p className={classNames(styles.desc, styles.right)}>
              Независимо от уровня вашего опыта, здесь
              <br /> помогут воплотить ваши музыкальные идеи в жизнь.
            </p>
          </div>
          <div className={styles.money}>
            <p className={classNames(styles.price, styles.number)}>
              1000
              <br />
              <span className={classNames(styles.price, styles.white)}>
                рублей
              </span>
              <span className={classNames(styles.price, styles.white)}>
                час
              </span>
            </p>
          </div>
        </div>

        {/*  <dt>
          <dd></dd>
          <dd></dd>
          <dd></dd>
          <dd></dd>
          <dd></dd>
        </dt> */}
        <ul className={styles.list}>
          <p className={styles.desc}>Преимущества:</p>
          <li className={styles.desc_li}>
            Индивидуальный подход к каждому клиенту.
          </li>
          <li className={styles.desc_li}>
            Опытные звукорежиссеры и продюсеры.
          </li>
          <li className={styles.desc_li}>Приятная атмосфера для творчества.</li>
          <li className={styles.desc_li}>
            Возможность записи сессий различной сложности.
          </li>
        </ul>
        <nav className={styles.link_social}>
          <a
            className={classNames(styles.vk)}
            href="https://m.vk.com/zvukxouse"
            target="_blank"
          >
            <Image
              src="/img/Socials/Telegram.svg"
              width={60}
              height={60}
              alt="link_vk"
            ></Image>
          </a>

          <a
            className={classNames(styles.tg)}
            href="https://t.me/dimawert"
            target="_blank"
          >
            <Image
              src="/img/Socials/Vk.svg"
              width={60}
              height={60}
              alt="link_telegram"
            ></Image>
          </a>
          <a
            href="tel:+7(913) 530-57-90"
            className={classNames(styles.social, styles.phone)}
          >
            +7(913) 530-57-90
          </a>
        </nav>

        {/* <button className={styles.closeBtn}></button> */}
      </main>
    </>
  );
}
