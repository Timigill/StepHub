"use client";

import { useState, useEffect, useRef } from "react";
import "../lime-light/lime-light.css";

export default function HomePage() {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.png",
  ];

  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Banner Slider */}
      <div className="banner-slider">
        <div
          ref={slideRef}
          className="banner-slide-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="banner-slide">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
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

      {/* Featured Products Section */}
      <section className="feature">
        <h2>UNSTITCHED</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src="/image1.jpg" alt="Product 1" />
            <div className="product-info">
              <h3>Stylish</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image2.jpg" alt="Product 2" />
            <div className="product-info">
              <h3>Embroidered</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image3.jpeg" alt="Product 3" />
            <div className="product-info">
              <h3>Printed</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image4.jpeg" alt="Product 4" />
            <div className="product-info">
              <h3>Formal</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="ready-to-wear">
        <div className="ready-container">
          {/* Left side text */}
          <div className="ready-text">
            <h2>READY TO WEAR</h2>
          </div>

          {/* Right side circular images */}
          <div className="ready-products">
            <div className="ready-card">
              <img src="/image1.jpg" alt="Product 1" />
              <p>Product 1</p>
            </div>
            <div className="ready-card">
              <img src="/image2.jpg" alt="Product 2" />
              <p>Product 2</p>
            </div>
            <div className="ready-card">
              <img src="/image3.jpeg" alt="Product 3" />
              <p>Product 3</p>
            </div>
            <div className="ready-card">
              <img src="/image4.jpeg" alt="Product 4" />
              <p>Product 4</p>
            </div>
            <div className="ready-card">
              <img src="/banner1.jpg" alt="Product 4" />
              <p>Product 5</p>
            </div>
            <div className="ready-card">
              <img src="/banner2.jpg" alt="Product 4" />
              <p>Product 6</p>
            </div>
            <div className="ready-card">
              <img src="/banner3.jpg" alt="Product 4" />
              <p>Product 7</p>
            </div>
            <div className="ready-card">
              <img src="/banner4.png" alt="Product 4" />
              <p>Product 8</p>
            </div>
            
          </div>
        </div>
      </section>



    </div>
  );
}
