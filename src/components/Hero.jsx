"use client";

import styles from "./styles/Hero.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const topCityY = useTransform(scrollY, [0, 1000], ["0%", "-25%"]);
  const bottomCityY = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  const titleOpacity = useTransform(scrollY, [250, 600], ["0%", "100%"]);
  const sunBorder = useTransform(
    scrollY,
    [250, 600],
    ["22%", "5px solid black"]
  );

  return (
    <div className={styles.heroPage}>
      <motion.div
        className={styles.topCity}
        style={{
          y: topCityY,
          scaleY: -1,
          scaleX: -1,
        }}
      ></motion.div>

      <div className={styles.heroContainer}>
        
        <div className={styles.heroWrapper}>
        <div className={styles.topTitleContainer}>
          <p>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </p>
        </div>

        <section className={styles.mainTitleContainer}>
          <motion.h1
            className={styles.title}
            style={{
              opacity: titleOpacity,
            }}
          >
            <span>S</span>
            <span>o</span>
            <span>L</span>
          </motion.h1>

          <motion.div
            className={styles.sun}
            style={{ border: sunBorder }}
          ></motion.div>
        </section>

        <div className={styles.bottomTitleContainer}>
          <p>WELCOME</p>
        </div>
        </div>
      </div>

      <motion.div
        className={styles.bottomCity}
        style={{
          y: bottomCityY,
        }}
      ></motion.div>
    </div>
  );
}

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#000000"
  stroke-width="1.25"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-plane-icon lucide-plane"
>
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
</svg>; */
}
