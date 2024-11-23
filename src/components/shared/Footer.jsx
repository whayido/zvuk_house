import Image from "next/image";
import packageJson from "../../../package.json";
import classNames from "classnames";
import BackToTop from "../ui/BackToTop";
import styles from "./_footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer} id="contacts">
        <section className={styles.content}>
          <div className={styles.top}>
            <h3 className={styles.heading}>
              ПУТЬ ВАШЕЙ МУЗЫКИ
              <br /> НАЧИНАЕТСЯ ЗДЕСЬ
            </h3>
            <Image
              className={styles.logo}
              src="/img/Logo/zvuk_logo.png"
              width={60}
              height={70}
              alt="zvuk_logo"
            ></Image>
          </div>
          <div className={styles.contacts}>
            <address className={styles.address}>
              город Норильск
              <br /> улица Бегичева 27, офис 4
            </address>
            <p className={styles.time}>
              круглосуточно
              <br />
              <i className={styles.time_desc}>по предварительной записи</i>
            </p>
            <a
              href="mailto:junglewert@gmail.com"
              className={classNames(styles.social, styles.email)}
            >
              Email: junglewert@gmail.com
            </a>
            <a
              href="tel:+7(913) 530-57-90"
              className={classNames(styles.social, styles.number)}
            >
              Телефон: +7(913) 530-57-90
            </a>
          </div>
          <div className={styles.bottom}>
            <div className={styles.link}>
              <div className={styles.center}>
                <nav className={styles.link_social}>
                  <a
                    target="_blank"
                    className={styles.vk}
                    href="https://vk.com/zvukxouse"
                  >
                    <Image
                      src="/img/Logo/vk.svg"
                      className={styles.social_logo}
                      width={60}
                      height={60}
                      alt="link_vk"
                    ></Image>
                  </a>

                  <a
                    className={styles.tg}
                    target="_blank"
                    href="https://t.me/dimawert"
                  >
                    <Image
                      src="/img/Logo/telegram.svg"
                      className={styles.social_logo}
                      width={60}
                      height={60}
                      alt="link_telegram"
                    ></Image>
                  </a>
                </nav>
                <div className={styles.desc}>
                  <p className={styles.creators}>
                    &copy; 2024 Звук Хаус - сайт создан&nbsp;
                    <a
                      href="https://t.me/whayido"
                      target="_blank"
                      className={styles.social_me}
                    >
                      @Whayido
                    </a>{" "}
                    и&nbsp;
                    <a
                      href="https://t.me/ne_Twin"
                      target="_blank"
                      className={styles.social_him}
                    >
                      @ne_Twin
                    </a>
                  </p>

                  <p className={styles.version}>
                    Версия сайта: {packageJson.version}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <BackToTop />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
