"use client";
import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import styles from "./_scrollBar.module.scss";

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
