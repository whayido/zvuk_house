import styles from "./_vocals.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Vk from "../../../public/img/Logo/vk.svg";
import Telegram from "../../../public/img/Logo/telegram.svg";
export default function Mixing() {
  return (
    <>
      <main className={styles.content}>
        <h1 className={styles.title}>УРОКИ ВОКАЛА</h1>
        <div className={styles.side}>
          <div className={styles.text}>
            <p className={styles.desc}>
              Студия звукозаписи Звук Хаус приглашает всех, кто мечтает овладеть
              искусством вокала, на профессиональные уроки.
            </p>
            <p className={classNames(styles.desc, styles.right)}>
              Мы предлагаем индивидуальные занятия, которые помогут вам раскрыть
              свой голос, научиться правильно петь и создавать качественные
              вокальные записи.
            </p>
          </div>
          <div className={styles.money}>
            <span className={classNames(styles.price, styles.white)}>курс</span>
            <p className={classNames(styles.price, styles.number)}>9000</p>

            <span className={classNames(styles.price, styles.white)}>
              рублей
            </span>
          </div>
        </div>

        <p className={styles.desc}>Преимущества:</p>
        <ul className={styles.list}>
          <li className={styles.desc_li}>Гибкий график занятий.</li>
          <li className={styles.desc_li}>
            Поддержка и сопровождение на всех этапах обучения.
          </li>
          <li className={styles.desc_li}>
            Включение в процесс записи вокала в студии.
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
