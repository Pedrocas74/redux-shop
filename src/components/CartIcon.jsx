"use client";

import { useEffect, useState } from "react";
import styles from "./styles/CartIcon.module.css";
import { ShoppingCart } from "lucide-react";

export default function CartIcon({ count = 0 }) {
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        if (count > 0) {
            setPulse(true);
            const t = setTimeout(() => setPulse(false), 300);
            return () => clearTimeout(t);
        }
    }, [count]);

    return (
        <span
            className={`${styles.wrapper} ${pulse ? styles.pulse : ""}`}
            aria-live="polite"
            aria-atomic="true"
            title={`Cart (${count})`}
        >
            <ShoppingCart className={styles.icon}/>
            {count > 0 && <span className={styles.badge}>{count}</span>}
        </span>
    );
}