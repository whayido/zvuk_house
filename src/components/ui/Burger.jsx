export default function Burger() {
  return (
    <>
      <div className={styles.filter}>
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
      </div>
    </>
  );
}
