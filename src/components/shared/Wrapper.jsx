"use client";
import Image from "next/image";
import styles from "./Wrapper.module.scss";
import { useState, useEffect } from "react";
import Button from "../ui/button";

export default function Scroll() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
      <div className={styles.wrapper}>
        <ul
          className={styles.container}
          style={{
            transform: `translateX(-${currentIndex * 33}%)`,
          }}
        >
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
      </div>

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
        <aside className={styles.modal}>
          <Button
            variant="third"
            className={styles.closeButton}
            onClick={handleCloseModal}
          >
            &#10005;
          </Button>
          <figure className={styles.modal_content}>
            <Image
              className={styles.modal_img}
              src={`/img/Modals/${selectedImage}.jpg`}
              alt={selectedImage}
              width={1630}
              height={800}
            />
          </figure>
        </aside>
      )}
    </>
  );
}
