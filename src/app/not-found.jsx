"use client";

import FooterSimple from "@components/layout/Footer/FooterSimple";
import { CircleX, CornerDownLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "90%",
        minHeight: "80vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: isMobile ? "2rem" : "2.5rem",
        }}
      >
        <CircleX fill="#a31f0eff" color="white" /> 404{" "}
        <CircleX fill="#a31f0eff" color="white" /> <br />
        Page Not Found
      </h1>
      <p
        style={{
          fontSize: isMobile ? "1rem" : "1.5rem",
          marginTop: "15px",
        }}
      >
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="buttonSecondary"
        style={{
          marginTop: "30px",
        }}
      >
        <CornerDownLeft size={13} /> Back
      </Link>
      <FooterSimple />
    </section>
  );
}
