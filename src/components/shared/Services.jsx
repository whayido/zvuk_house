import Recording from "./Recording";
import Mixing from "./Mixing";
import Vocals from "./Vocals";
import classNames from "classnames";
import styles from "./Services.module.scss";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useState } from "react";
export default function Services() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const openMoreModal = () => setIsMoreOpen(true);
  const closeMoreModal = () => setIsMoreOpen(false);

  const [isRecordingOpen, setIsRecordingOpen] = useState(false);
  const [isMixingOpen, setIsMixingOpen] = useState(false);
  const [isVocalsOpen, setIsVocalsOpen] = useState(false);

  const openRecordingModal = () => setIsRecordingOpen(true);
  const closeRecordingModal = () => setIsRecordingOpen(false);

  const openMixingModal = () => setIsMixingOpen(true);
  const closeMixingModal = () => setIsMixingOpen(false);

  const openVocalsModal = () => setIsVocalsOpen(true);
  const closeVocalsModal = () => setIsVocalsOpen(false);

  const openModal = (setModalOpen) => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (setModalOpen) => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
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
    </>
  );
}
