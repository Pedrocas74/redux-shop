"use client";

import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/poster.png"
        className={styles.heroVideo}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className={styles.titleContainer}>
        <h1>Welcome to E-Shop</h1>
        {/* <p>Discover amazing products at great prices</p> */}
      </section>
    </div>
  );
}
