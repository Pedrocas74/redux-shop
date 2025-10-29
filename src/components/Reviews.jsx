"use client";

import styles from "./styles/Reviews.module.css";
import { UserCircle2, Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      pic: UserCircle2,
      text: "Changed the way I shop - five stars.",
      author: "Ana O.",
      date: "07/04/2025",
    },
    {
      pic: UserCircle2,
      text: "My go-to gift for friends. Always a hit! <3",
      author: "Beatriz F.",
      date: "26/06/2025",
    },
    {
      pic: UserCircle2,
      text: "High quality and honestly worth every cent.",
      author: "Jeremy L.",
      date: "07/07/2025",
    },
    {
      pic: UserCircle2,
      text: "Customer service was incredible - resolved my issue same day.",
      author: "Peter M.",
      date: "18/08/2025",
    },
    {
      pic: UserCircle2,
      text: "Bought a jacket to my husband... He never takes it off now! :)",
      author: "Veronika S.",
      date: "01/10/2025",
    },
  ];

  return (
    <section className={styles.reviewSection}>
      <h2>Reviews</h2>
      <div className={styles.cardGrid}>
        {reviews.map((review, index) => (
          <div className={styles.cardContainer} key={index}>
            <div className={styles.mainReview}>
              <review.pic className={styles.userIcon} />
              <h4>{review.author}</h4>
              
              <div className={styles.starRow}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} color="#000000ff" fill="#000000ff" />
                ))}
              </div>

              <p>{review.text}</p>
            </div>
            <p>{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
