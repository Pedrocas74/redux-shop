"use client";

import styles from "./ProductsList.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";
import ProductCard from "../../components/ProductCard";
import Image from "next/image";
// import clothing from "/images/clothing.webp";
// import jewelry from "images/eletronics.webp";
// import electronics from "/images/electronics.webp";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={styles.productsContainer}>
      <h2>Our Products</h2>
      <div className={styles.productsSelector}>
        <div className={styles.imageBox}>
          <Image
            src="/images/clothing.webp"
            alt="Clothing"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/jewelry.webp"
            alt="Jewelry"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/electronics.webp"
            alt="Electronics"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
