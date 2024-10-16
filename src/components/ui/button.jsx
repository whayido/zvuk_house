"use client";
import styles from "./Button.module.scss";

export default function Button({ variant, children, ...rest }) {
  return (
    <button type="button" className={styles[variant]} {...rest}>
      {children}
    </button>
  );
}
