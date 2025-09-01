"use client";

import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { useState, useEffect } from "react";
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className="navbar">
            {/* Left - Logo */}
            <div className="left-logo">
                <Link href="/lime-light" className="logo">
                    <Image
                        src="/logo-nobg.svg"
                        alt="MyStore Logo"
                        width={70}
                        height={70}
                        priority
                    />
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="center">
                <div className="links">
                    {/* Fashion */}
                    <div className="dropdown">
                        <button
                            className="fashion"
                            onClick={() => toggleDropdown("fashion")}
                        >
                            Fashion
                        </button>
                        <div className={`mega-menu fashion ${activeDropdown === "fashion" ? "show" : ""}`}>
                            <div className="menu-column ">
                                <h4>Men</h4>
                                <ul>
                                    <li><Link href="/fashion/men/shirts">Shirts</Link></li>
                                    <li><Link href="/fashion/men/jeans">Jeans</Link></li>
                                    <li><Link href="/fashion/men/jackets">Jackets</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Women</h4>
                                <ul>
                                    <li><Link href="/fashion/women/dresses">Dresses</Link></li>
                                    <li><Link href="/fashion/women/tops">Tops</Link></li>
                                    <li><Link href="/fashion/women/skirts">Skirts</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Kids</h4>
                                <ul>
                                    <li><Link href="/fashion/kids/shirts">Shirts</Link></li>
                                    <li><Link href="/fashion/kids/shorts">Shorts</Link></li>
                                    <li><Link href="/fashion/kids/jackets">Jackets</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Accessories</h4>
                                <ul>
                                    <li><Link href="/fashion/accessories/belts">Belts</Link></li>
                                    <li><Link href="/fashion/accessories/watches">Watches</Link></li>
                                    <li><Link href="/fashion/accessories/hats">Hats</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Shoes */}
                    <div className="dropdown">
                        <button
                            className="fashion"
                            onClick={() => toggleDropdown("shoes")}
                        >
                            Shoes
                        </button>
                        <div className={`mega-menu shoes ${activeDropdown === "shoes" ? "show" : ""}`}>
                            <div className="menu-column">
                                <h4>Men</h4>
                                <ul>
                                    <li><Link href="/shoes/men/sneakers">Sneakers</Link></li>
                                    <li><Link href="/shoes/men/formal">Formal</Link></li>
                                    <li><Link href="/shoes/men/boots">Boots</Link></li>
                                    <li><Link href="/shoes/men/slippers">Slippers</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Women</h4>
                                <ul>
                                    <li><Link href="/shoes/women/heels">Heels</Link></li>
                                    <li><Link href="/shoes/women/sandals">Sandals</Link></li>
                                    <li><Link href="/shoes/women/flats">Flats</Link></li>
                                    <li><Link href="/shoes/women/wedges">Wedges</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Formal Shoes</h4>
                                <ul>
                                    <li><Link href="/shoes/formal/pumps">Pumps</Link></li>
                                    <li><Link href="/shoes/formal/moccasins">Moccasins</Link></li>
                                    <li><Link href="/shoes/formal/court">Court Shoes</Link></li>
                                    <li><Link href="/shoes/formal/peep-toes">Peep Toes</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>By Heel Size</h4>
                                <ul>
                                    <li><Link href="/shoes/heels/high">High Heels</Link></li>
                                    <li><Link href="/shoes/heels/mid">Mid Heels</Link></li>
                                    <li><Link href="/shoes/heels/low">Low Heels</Link></li>
                                    <li><Link href="/shoes/heels/flats">Flats</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Ethnic</h4>
                                <ul>
                                    <li><Link href="/shoes/ethnic/khusa">Khusa</Link></li>
                                    <li><Link href="/shoes/ethnic/chappal">Chappal</Link></li>
                                    <li><Link href="/shoes/ethnic/kolhapuri">Kolhapuri</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bags */}
                    <div className="dropdown">
                        <button
                            className="fashion"
                            onClick={() => toggleDropdown("bags")}
                        >
                            Bags
                        </button>
                        <div className={`mega-menu bags ${activeDropdown === "bags" ? "show" : ""}`}>
                            <div className="menu-column">
                                <h4>Men</h4>
                                <ul>
                                    <li><Link href="/bags/men/backpacks">Backpacks</Link></li>
                                    <li><Link href="/bags/men/laptop-bags">Laptop Bags</Link></li>
                                    <li><Link href="/bags/men/travel-bags">Travel Bags</Link></li>
                                    <li><Link href="/bags/men/wallets">Wallets</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Women</h4>
                                <ul>
                                    <li><Link href="/bags/women/handbags">Handbags</Link></li>
                                    <li><Link href="/bags/women/clutches">Clutches</Link></li>
                                    <li><Link href="/bags/women/totes">Totes</Link></li>
                                    <li><Link href="/bags/women/shoulder-bags">Shoulder Bags</Link></li>
                                    <li><Link href="/bags/women/backpacks">Backpacks</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cosmetics */}
                    <div className="dropdown">
                        <button
                            className="fashion"
                            onClick={() => toggleDropdown("cosmetics")}
                        >
                            Cosmetics
                        </button>
                        <div className={`mega-menu cosmetics ${activeDropdown === "cosmetics" ? "show" : ""}`}>
                            <div className="menu-column">
                                <h4>Men</h4>
                                <ul>
                                    <li><Link href="/cosmetics/men/skincare">Skincare</Link></li>
                                    <li><Link href="/cosmetics/men/fragrance">Fragrance</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Women</h4>
                                <ul>
                                    <li><Link href="/cosmetics/women/makeup">Makeup</Link></li>
                                    <li><Link href="/cosmetics/women/skincare">Skincare</Link></li>
                                    <li><Link href="/cosmetics/women/fragrance">Fragrance</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <h4>Unisex</h4>
                                <ul>
                                    <li><Link href="/cosmetics/unisex/perfumes">Perfumes</Link></li>
                                    <li><Link href="/cosmetics/unisex/haircare">Haircare</Link></li>
                                    <li><Link href="/cosmetics/unisex/bodycare">Body Care</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-link">
                    <Link href="/exclusive">
                        Online Exclusive
                    </Link>
                </div>
            </div>

            {/* Icons */}
            <div className="right-icon">
                <button onClick={() => setSearchOpen(!searchOpen)}><FiSearch /></button>
                <Link href="/account"><FiUser /></Link>
                <Link href="/cart"><FiShoppingBag /></Link>

                {searchOpen && (
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button
                className={`md:hidden menu-btn ${open ? "rotate" : ""}`}
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Mobile Dropdown */}
            {open && (
                <div className="mobile-links">
                    <div className="mobile">
                        <button onClick={() => setSearchOpen(!searchOpen)}><FiSearch /></button>
                        <Link href="/account"><FiUser /></Link>
                        <Link href="/cart"><FiShoppingBag /></Link>
                        {searchOpen && (
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        )}
                    </div>
                    <Link href="/fashion">Fashion</Link>
                    <Link href="/shoes">Shoes</Link>
                    <Link href="/bags">Bags</Link>
                    <Link href="/cosmetics">Cosmetics</Link>
                </div>
            )}
        </nav>
    );
}
