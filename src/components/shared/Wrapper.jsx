"use client";
import Image from "next/image";
import styles from "./_wrapper.module.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../ui/button";

export default function Scroll() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
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
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      container.scrollLeft = Math.min(
        container.scrollLeft + scrollAmount,
        maxScrollLeft
      );
      checkScrollAvailability();
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;

      container.scrollLeft = Math.max(container.scrollLeft - scrollAmount, 0);
      checkScrollAvailability();
    }
  };

  const checkScrollAvailability = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setCanScrollNext(container.scrollLeft < maxScrollLeft);
      setCanScrollPrev(container.scrollLeft > 0);
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
    window.addEventListener("resize", checkScrollAvailability);
    checkScrollAvailability();

    return () => {
      window.removeEventListener("resize", checkScrollAvailability);
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
          disabled={!canScrollPrev}
        >
          &#8592;
        </Button>
        <Button
          variant="third"
          className={styles.but}
          onClick={handleNext}
          disabled={!canScrollNext}
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
                  ? `/img/Modals/${selectedImage}_mobile.jpg` // Для маленьких экранов
                  : `/img/Modals/${selectedImage}.jpg` // Для больших экранов
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
