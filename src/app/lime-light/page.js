"use client";

import { useState, useEffect, useRef } from "react";
import { FiShoppingBag } from "react-icons/fi";
import "./lime-light.css";

export default function HomePage() {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.png",
  ];

  const products = [
    {
      id: 1,
      img: "/image1.jpg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 3,399",
    },
    {
      id: 2,
      img: "/image2.jpg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 3,799",
    },
    {
      id: 3,
      img: "/image3.jpeg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 3,599",
    },
    {
      id: 4,
      img: "/image4.jpeg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 3,899",
    },
    {
      id: 5,
      img: "/men.jpeg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 3,499",
    },
    {
      id: 6,
      img: "/women.jpeg",
      title: "3 Piece Cambric Suit-Printed (Unstitched)",
      price: "Rs. 5,499",
    },
  ];

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

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
          <div className="accessories-scroll" ref={scrollRef}>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />
              <p>BAGS</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>JEWELRY</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>WALLETS</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>WATCHES</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>SUNGLASSES</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>HAIR ACCESSORIES</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>SCARVES</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>DUPATTAS</p>
            </div>
            <div className="ready-card">
              <img src="/p1.png" alt="Bags" />

              <p>MUFFLERS</p>
            </div>

          </div>
        </div>
      </section>

      {/*  Section 4*/}
      <section className="feature section-4" style={{ marginTop: "1rem" }}>
        <h2 style={{ marginBottom: "3rem" }}>SHOP BY COLLECTION</h2>

        <div className="product-grid images">
          <div className="product-card">
            <img src="/image1.jpg" alt="Product 1" />
            <div className="product-info">
              <h3 style={{ marginTop: "1rem" }}>SPECIAL PRICE</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image2.jpg" alt="Product 2" />
            <div className="product-info">
              <h3 style={{ marginTop: "1rem" }}>CO-ORDS</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image3.jpeg" alt="Product 3" />
            <div className="product-info">
              <h3 style={{ marginTop: "1rem" }}>WESTERN</h3>
            </div>
          </div>

          <div className="product-card">
            <img src="/image4.jpeg" alt="Product 4" />
            <div className="product-info" >
              <h3 style={{ marginTop: "1rem" }}>SALE</h3>
            </div>
          </div>
        </div>
      </section>

      {/* center banner */}

      <section>
        <div className="center-banner">
          <img src="/center banner.jpg"></img>
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div className="section-5">
          <div className="category-card">
            <img src="/men.jpeg" alt="Watches" />
            <span>MEN</span>
          </div>

          <div className="category-card">
            <img src="/women.jpeg" alt="Accessories" />
            <span>WOMEN</span>
          </div>

          <div className="category-card">
            <img src="/bags.jpeg" alt="Jewelry" />
            <span>BAGS</span>
          </div>

          <div className="category-card">
            <img src="/footwear.jpeg" alt="Makeup" />
            <span>FOORWEAR</span>
          </div>
        </div>
      </section>

      {/* section no 6 */}

      <section>
        <div className="accessories-title">
          <div className="heading">
            <h2>ACCESSORIES</h2>
            <div className="buttons">
              <button onClick={() => scroll("left")}>◀</button>
              <button onClick={() => scroll("right")}>▶</button>
            </div>
          </div>
          <div className="accessories-wrapper">

            <div className="accessories-scroll" ref={scrollRef}>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />
                <p>BAGS</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>JEWELRY</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>WALLETS</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>WATCHES</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>SUNGLASSES</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>HAIR </p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>SCARVES</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>DUPATTAS</p>
              </div>
              <div className="accessory-card">
                <img src="/p1.png" alt="Bags" />

                <p>MUFFLERS</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* last section  */}

      <section className="new-arrivals">
        <div className="left">
          <h2>
            NEW <br /> ARRIVALS
          </h2>
        </div>

        <div className="right">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <div className="cart-icon">
                <FiShoppingBag size={20} />
              </div>
            </div>

          ))}
          <div className="card view-all">
            <h2>VIEW ALL <br /> 160 <br /> ARTICLES</h2>
            
          </div>


        </div>
      </section>




    </div>
  );
}
