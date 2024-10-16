"use client";
import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import styles from "./ScrollBar.module.scss";
import "overlayscrollbars/overlayscrollbars.css"; // Импортируем стили OverlayScrollbars

const ScrollBar = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Инициализация OverlayScrollbars для указанного контейнера
    const osInstance = OverlayScrollbars(scrollRef.current, {
      className: styles.osTheme, // Используйте класс из SCSS-модуля
      scrollbars: {
        autoHide: "leave",
        autoHideDelay: 800,
        visibility: "auto", // Убедитесь, что скроллбар видим
      },
    });

    // Очистка инстанса при размонтировании компонента
    return () => {
      if (osInstance) {
        osInstance.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className={styles.scrollContainer}>
      {children}
    </div>
  );
};

export default ScrollBar;
