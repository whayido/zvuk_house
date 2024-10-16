import styles from "./Marquee.module.scss";
import Link from "next/link";

// Массив с элементами
const items = [
  { id: 1, href: "#сведение", text: "СВЕДЕНИЕ И МИКС" },
  { id: 2, href: "#вокал", text: "УРОКИ ВОКАЛА" },
  { id: 3, href: "#запись", text: "ЗАПИСЬ" },
];

// Создаем массив из 27 элементов
const generateItems = (items, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result = result.concat(items);
  }
  return result;
};

const doubleItems = generateItems(items, 9);

const Marquee = () => {
  return (
    <nav className={styles.marquee}>
      {/* Дублируем ul для бесшовного скролла */}
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

export default Marquee;
