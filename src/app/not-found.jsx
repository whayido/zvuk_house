import styles from "./not-found.module.scss";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className={styles.main}>
      <Button variant="secondary" href="/" className={styles.button}>
        на главную &#8594;
      </Button>
      <h1 className={styles.title}>404</h1>

      <p className={styles.desc}>СТРАНИЦА НЕ НАЙДЕНА</p>
    </section>
  );
}
