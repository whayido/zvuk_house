import Hero from "../components/shared/Hero";
import styles from "./page.module.scss";
import Services from "../components/shared/Services";
import Information from "../components/shared/Information";
import Map from "../components/shared/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.content}>
        <Services />
        <Information />
        <Map />
      </section>
    </main>
  );
}
