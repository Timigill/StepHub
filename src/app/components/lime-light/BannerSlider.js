"use client";
import { useState, useEffect } from "react";
import "@/app/styles/homepage.css";

export default function BannerSlider() {
  const images = ["/1.png", "/2.png", "/3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-slider">
      <div
        className="banner-slide-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="banner-slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="banner-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`banner-dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
