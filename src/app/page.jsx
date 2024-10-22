"use client";
import styles from "./page.module.scss";
import Hero from "@/components/shared/Hero";
import Services from "@/components/shared/Services";
import Information from "@/components/shared/Information";
import Map from "@/components/shared/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Information />
      <Map />
    </main>
  );
}
