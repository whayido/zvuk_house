"use client";
import styles from "./Button.module.scss";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.backToTop} onClick={scrollToTop}>
      &#8593;
    </button>
  );
}
