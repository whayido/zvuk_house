import styles from "./not-found.module.scss";
import Button from "../components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className={styles.main}>
      <Link href="/">
        <Button variant="secondary" className={styles.button}>
          на главную &#8594;
        </Button>
      </Link>

      <h1 className={styles.title}>404</h1>

      <p className={styles.desc}>СТРАНИЦА НЕ НАЙДЕНА</p>
    </section>
  );
}
