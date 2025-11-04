"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Checkout.module.css"; // optional CSS module

export default function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const { current, rates } = useSelector((state) => state.currency);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [discountedTotal, setDiscountedTotal] = useState(totalPrice);

  const convert = (price) => (price * rates[current]).toFixed(2);

  let symbolPosition = "right"; //euro as default
  const getSymbol = () => {
    switch (current) {
      case "USD":
        symbolPosition = "left";
        return "$";
      case "GBP":
        symbolPosition = "left";
        return "£";
      default:
        symbolPosition = "right";
        return "€";
    }
  };
  const symbol = getSymbol();

  const applyDiscount = () => {
    if (isApplied) return; // already applied
    if (code !== "PEDRO74") {
      alert("Invalid code");
      setCode("");
      return;
    }
    const newTotal = totalPrice * 0.9; // 10% discount
    setDiscountedTotal(newTotal);
    setIsApplied(true); // disable further use
    alert("Promo code applied! 10% discount");
  };

  return (
    <section className={styles.checkoutSection}>
      <h1>Checkout</h1>

      <div className={styles.summarySection}>
        <h2>Order Summary</h2>
        {items.map((item) => (
          <div key={item.id} className={styles.itemRow}>
            <p>
              {item.title} × {item.quantity}
            </p>
            <p>
              {symbolPosition === "left" ? (
                <>
                  {symbol}
                  {convert(item.price * item.quantity)}
                </>
              ) : (
                <>
                  {convert(item.price * item.quantity)}
                  {symbol}
                </>
              )}
            </p>
          </div>
        ))}
        <hr />
        <p className={styles.toggleCode} onClick={() => setShowCode(!showCode)}>
          Have a promo code?
        </p>
        {showCode && (
          <div className={styles.promoCodeContainer}>
            <input
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={isApplied} // disable input if applied
            />
            <button onClick={applyDiscount} disabled={isApplied}>
              {isApplied ? "Applied" : "Apply"}
            </button>
          </div>
        )}

        {/* Show original price crossed out if discounted */}
        {discountedTotal < totalPrice && (
          <p className={styles.originalPrice}>
            {symbolPosition === "left"
              ? `${symbol}${convert(totalPrice)}`
              : `${convert(totalPrice)}${symbol}`}
          </p>
        )}

        {/* Total Price */}
        <p className={styles.totalPrice}>
          Total:{" "}
          {symbolPosition === "left"
            ? `${symbol}${convert(discountedTotal)}`
            : `${convert(discountedTotal)}${symbol}`}
        </p>
      </div>

      <div className={styles.paymentSection}>
        <h2>Payment</h2>
        <label>
          <input type="radio" name="payment" defaultChecked /> Credit Card
        </label>
        <label>
          <input type="radio" name="payment" /> PayPal
        </label>
      </div>

      <button className="buttonPrimary" onClick={() => alert("Order placed!")}>
        Place Order
      </button>
    </section>
  );
}
