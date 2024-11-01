"use client";
import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars"; // Импорт как именованный
import styles from "./ScrollBar.module.scss";
import "overlayscrollbars/overlayscrollbars.css";

const ScrollBar = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let osInstance;

    if (typeof window !== "undefined" && scrollRef.current) {
      osInstance = OverlayScrollbars(scrollRef.current, {
        className: styles.osTheme,
        scrollbars: {
          autoHide: "leave",
          autoHideDelay: 800,
          visibility: "auto",
        },
      });
    }

    return () => {
      if (osInstance) osInstance.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className={styles.scrollContainer}>
      {children}
    </div>
  );
};

export default ScrollBar;
