import styles from "./styles/InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={styles.infoContainer}>
      <h2>Why Shop With Us?</h2>
      <div className={styles.infoParagraphs}>
        <p>
          We offer the best selection of products, unbeatable prices, and fast
          delivery.
        </p>
        <p>
          Join thousands of happy customers who trust us for their shopping
          needs.
        </p>
      </div>
      <div className={styles.infoChecks}>
        <span>✅ quality</span>
        <span>✅ prices</span>
        <span>✅ delivery</span>
      </div>
    </section>
  );
}
