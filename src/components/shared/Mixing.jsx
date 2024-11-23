import styles from "./_mixing.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Vk from "../../../public/img/Logo/vk.svg";
import Telegram from "../../../public/img/Logo/telegram.svg";
export default function Mixing() {
  return (
    <>
      <main className={styles.content}>
        <h1 className={styles.title}>СВЕДЕНИЕ И МИКС</h1>
        <div className={styles.side}>
          <div className={styles.text}>
            <p className={styles.desc}>
              Студия звукозаписи Звук Хаус предлагает профессиональные услуги
              мастеринга и микширования ваших треков.
            </p>
            <p className={classNames(styles.desc, styles.right)}>
              Наши специалисты помогут добиться идеального звучания, которое
              будет качественно воспроизводиться на любых устройствах.
            </p>
          </div>
          <div className={styles.money}>
            <span className={classNames(styles.price, styles.white)}>от</span>
            <p className={classNames(styles.price, styles.number)}>3000</p>

            <span className={classNames(styles.price, styles.white)}>
              рублей
            </span>
          </div>
        </div>

        <p className={styles.desc}>Преимущества:</p>
        <ul className={styles.list}>
          <li className={styles.desc_li}>
            Индивидуальный подход к каждому проекту.
          </li>
          <li className={styles.desc_li}>
            Опытные инженеры с многолетним стажем.
          </li>
          <li className={styles.desc_li}>
            Высокое качество звука, соответствующее международным стандартам.
          </li>
          <li className={styles.desc_li}>
            Быстрое выполнение заказов с возможностью срочной обработки.
          </li>
        </ul>
        <nav className={styles.link_social}>
          <a
            className={classNames(styles.vk)}
            href="https://m.vk.com/zvukxouse"
            target="_blank"
          >
            <Image
              className={styles.social_logo}
              src={Vk}
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
              className={styles.social_logo}
              src={Telegram}
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
      </main>
    </>
  );
}
