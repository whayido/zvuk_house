import Scroll from "../../components/shared/Wrapper";
import styles from "./_info.module.scss";
import classNames from "classnames";
export default function Information() {
  return (
    <>
      <section className={classNames(styles.info)} id="information">
        <div className={styles.content}>
          <h2 className={classNames(styles.heading, styles.title_info)}>
            ВОЗМОЖНОСТИ И ИНФОРМАЦИЯ
          </h2>
          <p className={styles.desc_light}>
            Наши услуги не ограничиваются только записью и микшированием.
            Мы предлагаем аренду профессионального оборудования, уроки
            диджеинга, а также делимся нашей музыкой в социальной сети
            ВКонтакте. Узнайте больше о всех доступных опциях и контактах ниже.
          </p>
          <Scroll />
        </div>
      </section>
    </>
  );
}
