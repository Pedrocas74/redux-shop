"use client";

import styles from "./styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles.bigContainer}>

      <div className={styles.promotionContainer}>
        <h5>10% DISCOUNT</h5>
        <h6>
          Apply the code <span>PEDRO74</span> at the checkout
        </h6>
      </div>
      <hr />


      <div className={styles.policiesContainer}>
        <div className={styles.leftContainer}>
          <p>&copy; 2025 SunLiT, Inc. All rights reserved.</p>
          <Link href="/shipping-info">Shipping Info</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/returns-and-refunds">Returns & Refunds</Link>
          <a
          href="https://fakestoreapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span> FakeStore API
        </a>
        </div>
        <div className={styles.rightContainer}>
            <a href="/" className="buttonPrimary">Contact</a>
            <div className={styles.creditContainer}>
                <p>CARDS</p>
            </div>
        </div>
      </div>


      <footer className={styles.footer}>
        
        <a
          href="https://www.pedromagalhaes.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Pedro
        </a>
        <div className={styles.socials}>
          <span>github</span>
          <span>linkedin</span>
        </div>
      </footer>

    </section>
  );
}
