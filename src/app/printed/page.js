"use client";

import { useState } from "react";
import { FiFilter, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import "./printed.css";

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
                HOME &nbsp;&gt;&nbsp; WOMEN &nbsp;&gt;&nbsp; UNSTITCHED&nbsp; &gt;&nbsp; PRINTED
            </div>

            {/* Banner */}
            {/* Banner */}
            <div className="banner">
                <video
                    className="banner-video"
                    width="1200"
                    height="400"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/banner-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className="banner-title">PRINTED</h2>
            </div>


            {/* Category Filter */}
            <div className="category-section">
                <div className="category-info">
                    <div className="categories">
                        <div className="category-item">
                            <Image
                                src="/image1.jpg"
                                alt="Floral"
                                width={130}
                                height={130}
                                className="circle-img"
                            />
                            <p>FLORAL</p>
                        </div>

                        <div className="category-item">
                            <Image
                                src="/image2.jpg"
                                alt="Ethnic"
                                width={130}
                                height={130}
                                className="circle-img"
                            />
                            <p>ETHNIC</p>
                        </div>

                        <div className="category-item">
                            <Image
                                src="/image3.jpeg"
                                alt="Modern"
                                width={130}
                                height={130}
                                className="circle-img"
                            />
                            <p>MODERN</p>
                        </div>

                        <div className="category-item">
                            <Image
                                src="/image4.jpeg"
                                alt="Glam"
                                width={130}
                                height={120}
                                className="circle-img"
                            />
                            <p>GLAM</p>
                        </div>
                    </div>

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

            <div className="btn-wrapper">
                <button className="btn">SHOW MORE</button>
            </div>
        </div>
    );
}
