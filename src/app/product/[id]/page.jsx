"use client";

import styles from "./ProductDetails.module.css";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { useState, useEffect } from "react";
import Skeleton from "@components/Skeleton";
import Image from "next/image";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  const { current, rates } = useSelector((state) => state.currency);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const convert = (price) => (price * rates[current]).toFixed(2);
  const getSymbol = () => {
    switch (current) {
      case "USD":
        return "$";
      case "GBP":
        return "£";
      default:
        return "€";
    }
  };

  if (!mounted || !product) {
    return (
      <div
        style={{
          height: "85vh",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Skeleton width="70%" height="1.5rem" style={{ marginLeft: "2em" }} />
        <Skeleton width="25%" height="1rem" style={{ marginLeft: "2em" }} />
        <Skeleton width="80%" height="50vh" style={{ margin: "0 auto" }} />
        <Skeleton
          width="120px"
          height="2rem"
          borderRadius="8px"
          style={{ margin: "0 auto" }}
        />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.detailsContainer}>
        <span>Home/Category</span>
        <h1>{product.title}</h1>
        <h2 className={styles.price}>
          {getSymbol()}
          {convert(product.price)}
        </h2>
        <figure>
          <img
            src={product.image}
            alt={product.title}
            style={{ objectFit: "contain" }}
          />
        </figure>

        {product.sizes && (
          <div className={styles.sizeSelector}>
            {product.sizes.map((size) => (
              <button key={size} className={styles.sizeButton}>
                {size}
              </button>
            ))}
          </div>
        )}

        <div className={styles.buttonAddContainer}>
          {product.stock === "In stock" && (
            <button
              className={styles.buttonAdd}
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}
          {product.stock === "Sold out" && (
            <button
              className={styles.buttonAdd}
              onClick={() => dispatch(addToCart(product))}
              disabled
              style={{ cursor: "not-allowed" }}
            >
              Out of stock
            </button>
          )}
        </div>

        {/* DESCRIPTION OF THE PRODUCT */}
        <details>
          <summary className={styles.instructions}>Description</summary>
          <p className={styles.productDescription}>{product.description}</p>
        </details>

        {/* DELIVERY AND RETURN RULES */}
        <details>
          <summary className={styles.instructions}>
            Free delivery and returns
          </summary>
          <ul className={styles.careList}>
            <li>✓ 30 Day Returns </li>
            <li>✓ Free Worldwide Shipping </li>
            <li>✓ Shipped within 48 hours</li>
          </ul>
        </details>

        {/* WASHING INSTRUCTIONS */}
        <details>
          <summary className={styles.instructions}>Care</summary>
          <h3 className={styles.instructionsTitle}>Washing Instructions</h3>
          <ul className={styles.careList}>
            <li>
              <span className={styles.iconWrapper}>
                <Image
                  src="/images/icons/instructions/not-bleach.png"
                  alt="Do not bleach"
                  fill
                  priority
                />
              </span>
              Do not bleach
            </li>
            <li>
              <span className={styles.iconWrapper}>
                <Image
                  src="/images/icons/instructions/tumble-dry.png"
                  alt="Do not tumble dry"
                  fill
                  priority
                />
              </span>
              Do not tumble dry
            </li>
            <li>
              <span className={styles.iconWrapper}>
                <Image
                  src="/images/icons/instructions/do-not-dry.png"
                  alt="Do not dry clean"
                  fill
                  priority
                />
              </span>
              Do not dry clean
            </li>
            <li>
              <span className={styles.iconWrapper}>
                <Image
                  src="/images/icons/instructions/ironing.png"
                  alt="Iron on the lowest setting"
                  fill
                  priority
                />
              </span>
              Iron on the lowest setting
            </li>
            <li>
              <span className={styles.iconWrapper}>
                <Image
                  src="/images/icons/instructions/wash-30.png"
                  alt="Wash at low temperature"
                  fill
                  priority
                />
              </span>
              Wash at low temperature and on delicate cycle
            </li>
          </ul>
        </details>
      </section>
    </div>
  );
}
