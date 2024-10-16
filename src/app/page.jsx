"use client";
import { useState } from "react";
import Recording from "../components/shared/Recording";
import Mixing from "../components/shared/Mixing";
import Vocals from "../components/shared/Vocals";
import More from "../components/shared/More";
import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/ui/button";
import classNames from "classnames";
import Marquee from "@/components/shared/Marquee";
import Scroll from "@/components/shared/Wrapper";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const iframeId = "map_777847228";
    const content =
      "PGJvZHk+PHN0eWxlPgogICAgICAgIGh0bWwsIGJvZHkgewogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgfQogICAgICAgIGh0bWwsIGJvZHksICNtYXAgewogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIH0KICAgICAgICAuYnVsbGV0LW1hcmtlciB7CiAgICAgICAgICAgIHdpZHRoOiAyMHB4OwogICAgICAgICAgICBoZWlnaHQ6IDIwcHg7CiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzAyODFmMjsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICAgIH0KICAgICAgICAucGVybWFuZW50LXRvb2x0aXAgewogICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgICAgICAgICBib3gtc2hhZG93OiBub25lOwogICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4OwogICAgICAgICAgICBjb2xvcjogIzI2MjYyNjsKICAgICAgICB9CiAgICAgICAgLnBlcm1hbmVudC10b29sdGlwOmJlZm9yZSB7CiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgICAgfQogICAgICAgIC5kZy1wb3B1cF9oaWRkZW5fdHJ1ZSB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgIH0KICAgICAgICAubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtcG9wdXAgLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHsKICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICByaWdodDogMDsKICAgICAgICAgICAgd2lkdGg6IDIwcHg7CiAgICAgICAgICAgIGhlaWdodDogMjBweDsKICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICAgICAgICBsaW5lLWhlaWdodDogMTsKICAgICAgICB9CiAgICA8L3N0eWxlPjxkaXYgaWQ9Im1hcCI+PC9kaXY+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9tYXBzLmFwaS4yZ2lzLnJ1LzIuMC9sb2FkZXIuanM/cGtnPWZ1bGwmYW1wO3NraW49bGlnaHQiPjwvc2NyaXB0PjxzY3JpcHQ+KGZ1bmN0aW9uKGUpe3ZhciB0PUpTT04ucGFyc2UoZSkscj10Lm9yZGVyZWRHZW9tZXRyaWVzLG49dC5tYXBQb3NpdGlvbixhPXQuaXNXaGVlbFpvb21FbmFibGVkO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGUpLnNwbGl0KCIiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIiUiKygiMDAiK2UuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKX0pLmpvaW4oIiIpKX1ERy50aGVuKGZ1bmN0aW9uKCl7dmFyIGU9REcubWFwKCJtYXAiLHtjZW50ZXI6W24ubGF0LG4ubG9uXSx6b29tOm4uem9vbSxzY3JvbGxXaGVlbFpvb206YSx6b29tQ29udHJvbDohYX0pO0RHLmdlb0pTT04ocix7c3R5bGU6ZnVuY3Rpb24oZSl7dmFyIHQscixuLGEsbztyZXR1cm57ZmlsbENvbG9yOm51bGw9PT0odD1lKXx8dm9pZCAwPT09dD92b2lkIDA6dC5wcm9wZXJ0aWVzLmZpbGxDb2xvcixmaWxsT3BhY2l0eTpudWxsPT09KHI9ZSl8fHZvaWQgMD09PXI/dm9pZCAwOnIucHJvcGVydGllcy5maWxsT3BhY2l0eSxjb2xvcjpudWxsPT09KG49ZSl8fHZvaWQgMD09PW4/dm9pZCAwOm4ucHJvcGVydGllcy5zdHJva2VDb2xvcix3ZWlnaHQ6bnVsbD09PShhPWUpfHx2b2lkIDA9PT1hP3ZvaWQgMDphLnByb3BlcnRpZXMuc3Ryb2tlV2lkdGgsb3BhY2l0eTpudWxsPT09KG89ZSl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucHJvcGVydGllcy5zdHJva2VPcGFjaXR5fX0scG9pbnRUb0xheWVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuInJhZGl1cyJpbiBlLnByb3BlcnRpZXM/REcuY2lyY2xlKHQsZS5wcm9wZXJ0aWVzLnJhZGl1cyk6REcubWFya2VyKHQse2ljb246ZnVuY3Rpb24oZSl7cmV0dXJuIERHLmRpdkljb24oe2h0bWw6IjxkaXYgY2xhc3M9J2J1bGxldC1tYXJrZXInIHN0eWxlPSdib3JkZXItY29sb3I6ICIrZSsiOyc+PC9kaXY+IixjbGFzc05hbWU6Im92ZXJyaWRlLWRlZmF1bHQiLGljb25TaXplOlsyMCwyMF0saWNvbkFuY2hvcjpbMTAsMTBdfSl9KGUucHJvcGVydGllcy5jb2xvcil9KX0sb25FYWNoRmVhdHVyZTpmdW5jdGlvbihlLHQpe2UucHJvcGVydGllcy5kZXNjcmlwdGlvbiYmdC5iaW5kUG9wdXAobyhlLnByb3BlcnRpZXMuZGVzY3JpcHRpb24pLHtjbG9zZUJ1dHRvbjohMCxjbG9zZU9uRXNjYXBlS2V5OiEwfSksZS5wcm9wZXJ0aWVzLnRpdGxlJiZ0LmJpbmRUb29sdGlwKG8oZS5wcm9wZXJ0aWVzLnRpdGxlKSx7cGVybWFuZW50OiEwLG9wYWNpdHk6MSxjbGFzc05hbWU6InBlcm1hbmVudC10b29sdGlwIn0pfX0pLmFkZFRvKGUpfSl9KSgneyJvcmRlcmVkR2VvbWV0cmllcyI6W3sidHlwZSI6IkZlYXR1cmUiLCJwcm9wZXJ0aWVzIjp7ImNvbG9yIjoiIzAwMDAwMCIsInRpdGxlIjoiIiwiZGVzY3JpcHRpb24iOiIiLCJ6SW5kZXgiOjEwMDAwMDAwMDB9LCJnZW9tZXRyeSI6eyJ0eXBlIjoiUG9pbnQiLCJjb29yZGluYXRlcyI6Wzg4LjE4MTI1OSw2OS4zNjE4NF19LCJpZCI6NjUzfV0sIm1hcFBvc2l0aW9uIjp7ImxhdCI6NjkuMzYxNTcxNzU1NTU3MzQsImxvbiI6ODguMTgyNjQyNjc4MjU3MzUsInpvb20iOjE3fSwiaXNXaGVlbFpvb21FbmFibGVkIjp0cnVlfScpPC9zY3JpcHQ+PHNjcmlwdCBhc3luYz0iIiB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xNTg4NjYxNjgtMSI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPihmdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKX13aW5kb3cuZGF0YUxheWVyPXdpbmRvdy5kYXRhTGF5ZXJ8fFtdLHQoImpzIixuZXcgRGF0ZSksdCgiY29uZmlnIixlKSx3aW5kb3cuZ3RhZz10fSkoJ1VBLTE1ODg2NjE2OC0xJyk8L3NjcmlwdD48L2JvZHk+";

    const iframe = document.getElementById(iframeId);
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(atob(content));
      iframe.contentWindow.document.close();
    }
  }, []);

  const [isRecordingOpen, setIsRecordingOpen] = useState(false);
  const [isMixingOpen, setIsMixingOpen] = useState(false);
  const [isVocalsOpen, setIsVocalsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const openModal = (setModalOpen) => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Отключить прокрутку
  };

  const closeModal = (setModalOpen) => {
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Включить прокрутку
  };

  const openRecordingModal = () => setIsRecordingOpen(true);
  const closeRecordingModal = () => setIsRecordingOpen(false);

  const openMixingModal = () => setIsMixingOpen(true);
  const closeMixingModal = () => setIsMixingOpen(false);

  const openVocalsModal = () => setIsVocalsOpen(true);
  const closeVocalsModal = () => setIsVocalsOpen(false);

  const openMoreModal = () => setIsMoreOpen(true);
  const closeMoreModal = () => setIsMoreOpen(false);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.5, 0]
  );
  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value > 0 && value < 1) {
        controls.start({ zIndex: 999 });
      } else {
        controls.start({ zIndex: 1 });
      }
    });
    controls.start({ opacity: 1, y: 0 });
  }, [scrollYProgress, controls]);
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          ЗВУК <span className={styles.house}>ХАУС</span>
        </h1>
        <Marquee />
        <p className={styles.desc}>
          САМАЯ СЕВЕРНАЯ <mark className={styles.mark}>СТУДИЯ ЗВУКОЗАПИСИ</mark>{" "}
          В РОССИИ. МЫ ДЕЛАЕМ МУЗЫКУ, ЗАПИСЫВАЕМ ВОКАЛ, ПРЕДОСТАВЛЯЕМ УСЛУГИ
          СВЕДЕНИЯ ВАШИХ ПРОЕКТОВ, ТАКЖЕ ПРОВОДИМ УРОКИ ВОКАЛА.
        </p>
        <Button
          variant="primary"
          /* onClick={openMoreModal} */ onClick={() => openModal(setIsMoreOpen)}
        >
          подробнее &#8594;{" "}
        </Button>

        {isMoreOpen && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <More />
              <button
                className={styles.closeButton}
                onClick={() => closeModal(setIsMoreOpen)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <motion.div
          style={{
            scale,
            opacity,
          }}
          animate={controls}
        >
          <Image
            className={styles.photo}
            src="/img/Content/1.jpg"
            width={1630}
            height={600}
            alt="studio photo"
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/PZtPQAI9gNOAjqsfAAAAABJRU5ErkJggg=="
            quality={100}
            priority={true}
          />
        </motion.div>
      </section>
      <section className={styles.services} id="services">
        <div className={styles.services_content}>
          <h2
            className={classNames(styles.heading, styles.title_services)}
            id="услуги"
          >
            УСЛУГИ
          </h2>

          <Image
            className={classNames(styles.photos, styles.synth)}
            src="/img/Content/synth.jpg"
            width={815}
            height={506}
            loading="lazy"
            alt="synth"
          />

          <Image
            className={classNames(styles.photos, styles.rec)}
            src="/img/Content/rec.jpg"
            width={815}
            height={950}
            loading="lazy"
            alt="recording"
          />

          <ul className={styles.list}>
            <li className={classNames(styles.song)}>
              <h3 className={styles.title_items} id="запись">
                ЗАПИСЬ ПЕСНИ
              </h3>
              <p className={styles.text}>
                Запиши хит в стенах самой северной студии звукозаписи в России
              </p>
              <aside className={styles.block}>
                <span className={styles.price}>1000 рублей / час</span>
                <Button
                  variant="secondary"
                  onClick={() => openModal(setIsRecordingOpen)}
                >
                  записаться &#8594;
                </Button>
              </aside>
            </li>
            <li className={classNames(styles.mixing)}>
              <h3 className={styles.title_items} id="сведение">
                СВЕДЕНИЕ И МИКС
              </h3>
              <p className={styles.text}>
                Самое северное сведение ваших треков в стране
              </p>
              <aside className={styles.block}>
                <span className={styles.price}>от 3000 рублей</span>
                <Button
                  variant="secondary"
                  onClick={() => openModal(setIsMixingOpen)}
                >
                  записаться &#8594;
                </Button>
              </aside>
            </li>
            <li className={classNames(styles.vocals)}>
              <h3 className={styles.title_items} id="вокал">
                УРОКИ ВОКАЛА
              </h3>
              <p className={styles.text}>
                Научим правильно петь ваши любимые <br /> песни даже в -50°C
              </p>
              <aside className={styles.block}>
                <span className={styles.price}>9000 рублей</span>
                <Button
                  variant="secondary"
                  onClick={() => openModal(setIsVocalsOpen)}
                >
                  записаться &#8594;
                </Button>
              </aside>
            </li>
          </ul>
          <Image
            className={classNames(styles.photos, styles.equipment)}
            src="/img/Content/equipment.jpg"
            width={815}
            height={600}
            loading="lazy"
            alt="equipment"
          />
          <Image
            className={classNames(styles.photos, styles.micro)}
            src="/img/Content/micro.jpg"
            width={815}
            height={600}
            loading="lazy"
            alt="microphone"
          />
        </div>
      </section>
      {isRecordingOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <Recording />
            <button
              className={styles.closeButton}
              onClick={() => closeModal(setIsRecordingOpen)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isMixingOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <Mixing />
            <button
              className={styles.closeButton}
              onClick={() => closeModal(setIsMixingOpen)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isVocalsOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <Vocals />
            <button
              className={styles.closeButton}
              onClick={() => closeModal(setIsVocalsOpen)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

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

      <section className={styles.map}>
        <div className={styles.map_center}>
          <h2 className={styles.heading} id="контакты">
            КАРТА
          </h2>
          <iframe
            className={styles.map_map}
            id="map_777847228"
            frameBorder="0"
            width="1630px"
            height="700px"
            sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
          ></iframe>
          <div className={styles.desc_map}>
            <a
              href="https://2gis.ru/norilsk/firm/70000001076226345/tab/reviews"
              className={styles.desc}
            >
              Посмотреть отзывы в <mark className={styles.link_map}>2ГИС</mark>
            </a>
            <p className={styles.address}>
              город Норильск
              <br /> улица &nbsp;
              <mark className={styles.link_map}>Бегичева 27, офис 4</mark>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
