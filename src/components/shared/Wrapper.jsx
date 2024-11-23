"use client";
import Image from "next/image";
import styles from "./_wrapper.module.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../ui/button";

export default function Scroll() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Определяем текущий размер экрана
  const containerRef = useRef(null);

  const handleClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex === 0) {
      scrollToState(1);
      setCurrentIndex(1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 1) {
      scrollToState(0);
      setCurrentIndex(0);
    }
  };

  const scrollToState = (state) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstItemWidth = container.children[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(container).gap) || 0;

      if (state === 1) {
        // Состояние 1: часть первого элемента, полностью второй, третий, четвертый
        const offset = firstItemWidth / 2 + gap;
        container.scrollTo({
          left: offset,
          behavior: "smooth",
        });
      } else if (state === 0) {
        // Состояние 0: исходное положение
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Проверяем ширину экрана
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className={styles.wrapper}>
        <ul className={styles.container} ref={containerRef}>
          <li
            className={styles.container_item}
            onClick={() => handleClick("call")}
          >
            <Image
              className={styles.container_item_image}
              src="/img/Content/call.jpg"
              width={1630}
              height={700}
              loading="lazy"
              alt="call"
            />
          </li>
          <li
            className={styles.container_item}
            onClick={() => handleClick("rent")}
          >
            <Image
              className={styles.container_item_image}
              src="/img/Content/rent.jpg"
              width={1630}
              height={700}
              loading="lazy"
              alt="rent_machine"
            />
          </li>
          <li
            className={styles.container_item}
            onClick={() => handleClick("music")}
          >
            <Image
              className={styles.container_item_image}
              src="/img/Content/music.jpg"
              width={1630}
              height={700}
              loading="lazy"
              alt="music"
            />
          </li>
          <li
            className={styles.container_item}
            onClick={() => handleClick("dj")}
          >
            <Image
              className={styles.container_item_image}
              src="/img/Content/dj.jpg"
              width={1630}
              height={700}
              loading="lazy"
              alt="dj"
            />
          </li>
        </ul>
      </section>

      <div className={styles.controls}>
        <Button
          variant="third"
          className={styles.but}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592;
        </Button>
        <Button
          variant="third"
          className={styles.but}
          onClick={handleNext}
          disabled={currentIndex === 1}
        >
          &#8594;
        </Button>
      </div>

      {isModalOpen && (
        <aside
          className={styles.modal}
          onClick={(e) => {
            if (e.target.classList.contains(styles.modal)) {
              handleCloseModal();
            }
          }}
        >
          <Button
            variant="third"
            className={styles.closeButton}
            onClick={handleCloseModal}
          >
            &times;
          </Button>
          <figure className={styles.modal_content}>
            <Image
              className={styles.modal_img}
              src={
                isSmallScreen
                  ? `/img/Modals/${selectedImage}_mobile.jpg`
                  : `/img/Modals/${selectedImage}.jpg`
              }
              alt={selectedImage}
              width={isSmallScreen ? 768 : 1630}
              height={isSmallScreen ? 400 : 820}
            />
          </figure>
        </aside>
      )}
    </>
  );
}
