import styles from "./Hero.module.scss";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/shared/Marquee";
import Button from "@/components/ui/button";
import More from "@/components/shared/More";
import { useEffect } from "react";
import { useState } from "react";
export default function Hero() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const openMoreModal = () => setIsMoreOpen(true);
  const closeMoreModal = () => setIsMoreOpen(false);

  const openModal = (setModalOpen) => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (setModalOpen) => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

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
            quality={100}
            priority={true}
          />
        </motion.div>
      </section>
    </>
  );
}
