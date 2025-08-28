"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

      useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <nav className="navbar">
            {/* Left - Logo */}
            <div className="left-logo">
                <Link href="/lime-light" className="logo">
                    MyStore
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="center">
                <div className="links">
                    <Link href="/franrances">Fragrancs</Link>
                    <Link href="/shoes">Shoes</Link>
                    <Link href="/bags">Bags</Link>
                    <Link href="/kids">Kids</Link>
                    <Link href="/accessories">Accessories</Link>
                </div>
                <div className="bottom-link">
                    <Link href="/exclusive">
                        Online Exclusive
                    </Link>
                </div>
            </div>

            {/* Icons */}
            <div className="right-icon">
                <button onClick={() => setSearchOpen(!searchOpen)}><FaSearch /></button>
                <Link href="/account"><FaUser /></Link>
                <Link href="/cart"><FaShoppingBag /></Link>

                {/* Search Box (toggle) */}
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
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                ☰
            </button>



            {/* Mobile Dropdown */}
            {open && (
                <div className="mobile-links">
                   <Link href="/franrances">Fragrancs</Link>
                    <Link href="/shoes">Shoes</Link>
                    <Link href="/bags">Bags</Link>
                    <Link href="/kids">Kids</Link>
                    <Link href="/accessories">Accessories</Link>
                    
                </div>
            )}
        </nav>
    );
}
