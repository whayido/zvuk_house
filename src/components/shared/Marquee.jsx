import Link from "next/link";
import styles from "./_marquee.module.scss";
/* import Marquee from "react-fast-marquee"; */
const items = [
  { id: 1, href: "#сведение", text: "СВЕДЕНИЕ И МИКС" },
  { id: 2, href: "#вокал", text: "УРОКИ ВОКАЛА" },
  { id: 3, href: "#запись", text: "ЗАПИСЬ" },
];

const generateItems = (items, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result = result.concat(items);
  }
  return result;
};

const doubleItems = generateItems(items, 9);

const MarqueeComp = () => {
  return (
    /*   <Marquee speed={30}>
      <nav className={styles.marquee}>
        <ul className={styles.carousel}>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              УРОКИ ВОКАЛА
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              ЗАПИСЬ
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              МИКС И СВЕДЕНИЕ
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              УРОКИ ВОКАЛА
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              ЗАПИСЬ
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              МИКС И СВЕДЕНИЕ
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              УРОКИ ВОКАЛА
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              ЗАПИСЬ
            </Link>
          </li>
          <li className={styles.carousel_item}>
            <Link href="/" className={styles.carousel_link}>
              МИКС И СВЕДЕНИЕ
            </Link>
          </li>
        </ul>
      </nav>
    </Marquee> */

    <nav className={styles.marquee}>
      <ul className={styles.carousel}>
        {doubleItems.map((item, index) => (
          <li key={index} className={styles.carousel_item}>
            <Link href={item.href} className={styles.carousel_link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.carousel}>
        {doubleItems.map((item, index) => (
          <li key={`duplicate-${index}`} className={styles.carousel_item}>
            <Link href={item.href} className={styles.carousel_link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarqueeComp;
