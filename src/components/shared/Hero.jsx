"use client";
import Marquee from "../../components/shared/Marquee";
import styles from "./_hero.module.scss";
import Image from "next/image";
import Studio from "../../../public/img/Content/studio.JPG";
import Button from "../../components/ui/button";
import More from "../../components/shared/More";
import { useState } from "react";

export default function Hero() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

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

        <Button variant="primary" onClick={() => openModal(setIsMoreOpen)}>
          подробнее &#8594;{" "}
        </Button>

        {isMoreOpen && (
          <div
            className={styles.modal}
            onClick={(e) => {
              if (e.target.classList.contains(styles.modal)) {
                closeModal(setIsMoreOpen);
              }
            }}
          >
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

        <Image
          className={styles.photo}
          src={Studio}
          alt="studio photo"
          width={1630}
          height={600}
          quality={100}
          priority
        />
      </section>
    </>
  );
}
