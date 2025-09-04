"use client";

import { useState } from "react";
import { FiFilter, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import "./formal.css"; 

export default function Formal() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "3 Piece Karandi Suit",
      img: "/image1.jpg",
      desc: "Embroidered Unstitched",
      price: 6499,
      oldPrice: 7499,
    },
    {
      id: 2,
      name: "3 Piece Khaddar Suit",
      img: "/image4.jpeg",
      desc: "Embroidered Unstitched",
      price: 4999,
    },
    {
      id: 3,
      name: "3 Piece Khaddar Suit",
      img: "/image3.jpeg",
      desc: "Embroidered Unstitched",
      price: 6499,
    },
    {
      id: 4,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
     {
      id: 5,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
     {
      id: 6,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
     {
      id: 7,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },
     {
      id: 8,
      name: "Khaddar Shirt",
      img: "/image2.jpg",
      desc: "Printed Unstitched",
      price: 959,
      oldPrice: 1199,
      discount: "20% OFF",
    },

  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="winter-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        HOME &nbsp;&gt;&nbsp; WOMEN &nbsp;&gt;&nbsp; UNSTITCHED&nbsp; &gt;&nbsp; WINTER
      </div>

      {/* Banner */}
      <div className="banner">
        <Image
          src="/banner2.png"
          alt="Winter Banner"
          width={1200}
          height={400}
          className="banner-img"
        />
        <h2 className="banner-title">FORMAL</h2>
      </div>

      {/* Category Filter */}
      <div className="category-section">
        <div className="category-info">
          <Image
            src="/image1.jpg"
            alt="Category"
            width={140}
            height={140}
            className="circle-img"
          />
          <p>EMBROIDERED</p>
        </div>
        <div className="filters">
          <button>3 Piece</button>
          <button>Shirt Trousers</button>
          <button>Shirts</button>
        </div>

      </div>
      <div className="filter-sort-row">
        {/* Left side filter */}
        <div className="filter">
          <FiFilter className="filter-icon" />
          <span>FILTER</span>
        </div>

        {/* Right side sort */}
        <div className="sort">
          <span>8 PRODUCTS</span>
          <select>
            <option>Date, New to Old</option>
            <option>Date, Old to New</option>
            <option>Price, Low to High</option>
            <option>Price, High to Low</option>
          </select>
        </div>
      </div>
      {/* Product Grid */}

<div className="product-grid">
  {products.map((p) => (
    <div className="product-card" key={p.id}>
      <div className="image-wrapper">
        <Image src={p.img} alt={p.name} width={250} height={350} />

        {/* 🛒 Cart Icon */}
        <div className="cart-icon" onClick={() => addToCart(p)}>
          <FiShoppingBag />
        </div>

        {/* ⬤ Dots */}
        <div className="image-dots">
          <span className="dot1"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <h5>
        {p.name} <span className="desc">{p.desc}</span>
      </h5>
      <p className="price">
        Rs. {p.price}{" "}
        {p.oldPrice && <span className="old-price">Rs. {p.oldPrice}</span>}
      </p>
    </div>
  ))}
</div>

      <p>No more product</p>
    </div>
  );
}
