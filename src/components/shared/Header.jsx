"use client";
import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <address className={styles.address}>
          <b>НОРИЛЬСК</b> УЛИЦА БЕГИЧЕВА 27/4{" "}
        </address>
        <button
          aria-label="Menu"
          className={styles.burgerButton}
          onClick={toggleMenu}
        >
          <svg
            viewBox="143.055 56.017 240 220"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              d="M163.055 106.017v50h20v-100h-20v50z"
              className={styles.slider__left__upper}
            ></path>
            <path
              d="M143.055 191.017v15h60v-30h-60v15z"
              className={styles.slider__left__center}
            ></path>
            <path
              d="M163.055 251.017v25h20v-50h-20v25z"
              className={styles.slider__left__lower}
            ></path>
            <path
              d="M253.055 81.017v25h20v-50h-20v25z"
              className={styles.slider__middle__upper}
            ></path>
            <path
              d="M233.055 141.017v15h60v-30h-60v15z"
              className={styles.slider__middle__center}
            ></path>
            <path
              d="M253.055 226.017v50h20v-100h-20v50z"
              className={styles.slider__middle__lower}
            ></path>
            <path
              d="M343.055 106.017v50h20v-100h-20v50z"
              className={styles.slider__right__upper}
            ></path>
            <path
              d="M323.055 191.017v15h60v-30h-60v15z"
              className={styles.slider__right__center}
            ></path>
            <path
              d="M343.055 251.017v25h20v-50h-20v25z"
              className={styles.slider__right__lower}
            ></path>
          </svg>
        </button>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.menuContent}>
            <li>
              <a href="#студия" className={styles.menuItem}>
                О студии
              </a>
            </li>
            <li>
              {" "}
              <a href="#услуги" className={styles.menuItem}>
                Услуги
              </a>
            </li>
            <li>
              {" "}
              <a href="#контакты" className={styles.menuItem}>
                Контакты
              </a>
            </li>
          </ul>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &#10005;
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
