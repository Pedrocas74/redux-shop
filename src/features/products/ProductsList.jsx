"use client";

import styles from "./ProductsList.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";
import ProductCard from "../../components/ProductCard";
import Image from "next/image";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState(null); //null = show all products
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const categoryMap = {
    Clothing: ["men's clothing", "women's clothing"],
    Jewelry: ["jewelery"],
    Electronics: ["electronics"],
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onToggle = (cat) => {
    setSelectedCategory((prev) => (prev === cat ? null : cat));
  };

  if (loading)
    return (
      <p role="status" aria-live="polite" style={{ textAlign: "center", marginBottom: "10vh" }}>Loading...</p>
    );
  if (error)
    return (
      <p role="alert" style={{ textAlign: "center", marginBottom: "10vh" }}>
        Error: {error}
      </p>
    );

  return (
    <section
      className={styles.productsContainer}
      aria-labelledby="products-heading"
    >
      <h2 id="products-heading">Our Products</h2>
      <p>Select a category</p>

      <div
        className={styles.productsSelector}
        role="radiogroup"
        aria-label="Filter products by category"
      >
        <div
          className={`${styles.imageBox} ${
            selectedCategory === "Clothing" ? styles.selected : ""
          }`}
          role="radio"
          tabIndex={0}
          aria-pressed={selectedCategory === "Clothing"}
          onClick={() => onToggle("Clothing")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && onToggle("Clothing")
          }
        >
          <Image
            src="/images/clothing.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay}>Clothing</div>
        </div>

        <div
          className={`${styles.imageBox} ${
            selectedCategory === "Jewelry" ? styles.selected : ""
          }`}
          role="radio"
          tabIndex={0}
          aria-pressed={selectedCategory === "Jewelry"}
          onClick={() => onToggle("Jewelry")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && onToggle("Jewelry")
          }
        >
          <Image
            src="/images/jewelerySun.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay}>Jewelry</div>
        </div>

        <div
          className={`${styles.imageBox} ${
            selectedCategory === "Electronics" ? styles.selected : ""
          }`}
          role="radio"
          tabIndex={0}
          aria-pressed={selectedCategory === "Electronics"}
          onClick={() => onToggle("Electronics")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && onToggle("Electronics")
          }
        >
          <Image
            src="/images/electronicsOrange.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay}>Electronics</div>
        </div>
      </div>
      <button
        className="buttonTertiary"
        style={{
          marginBottom: "7vh",
          display: selectedCategory === null ? "none" : "inline-block",

        }}
        type="button"
        onClick={() => setSelectedCategory(null)}
      >
        Show all products
      </button>
      <div className={styles.grid}>
        {products
          .filter(
            (product) =>
              !selectedCategory ||
              categoryMap[selectedCategory].includes(product.category)
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}
