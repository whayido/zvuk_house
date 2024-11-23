"use client";
import styles from "./_services.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Synth from "../../../public/img/Content/synth.JPG";
import Rec from "../../../public/img/Content/rec.JPG";
import Equipment from "../../../public/img/Content/equipment.JPG";
import Micro from "../../../public/img/Content/micro.JPG";
import Button from "../../components/ui/button";
import { useState } from "react";
import Recording from "./Recording";
import Mixing from "./Mixing";
import Vocals from "./Vocals";
export default function Services() {
  const [isRecordingOpen, setIsRecordingOpen] = useState(false);
  const [isMixingOpen, setIsMixingOpen] = useState(false);
  const [isVocalsOpen, setIsVocalsOpen] = useState(false);

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
        <div className={styles.content}>
          <div className={styles.left}>
            <Image
              className={classNames(styles.photos, styles.synth)}
              src={Synth}
              width={815}
              height={506}
              alt="synth"
            />
            <Image
              className={classNames(styles.photos, styles.rec)}
              src={Rec}
              width={815}
              height={950}
              alt="recording"
            />
            <Image
              className={classNames(styles.photos, styles.equipment)}
              src={Equipment}
              width={815}
              height={600}
              loading="lazy"
              alt="equipment"
            />
          </div>
          <div className={styles.right}>
            <h2
              className={classNames(styles.heading, styles.title_services)}
              id="услуги"
            >
              УСЛУГИ
            </h2>
            {isRecordingOpen && (
              <div
                className={styles.modal}
                onClick={(e) => {
                  if (e.target.classList.contains(styles.modal)) {
                    closeModal(setIsRecordingOpen);
                  }
                }}
              >
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
              className={classNames(styles.micro)}
              src={Micro}
              width={815}
              height={600}
              loading="lazy"
              alt="microphone"
            />
          </div>
        </div>
      </section>

      {isMixingOpen && (
        <div
          className={styles.modal}
          onClick={(e) => {
            if (e.target.classList.contains(styles.modal)) {
              closeModal(setIsMixingOpen);
            }
          }}
        >
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
        <div
          className={styles.modal}
          onClick={(e) => {
            if (e.target.classList.contains(styles.modal)) {
              closeModal(setIsVocalsOpen);
            }
          }}
        >
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
