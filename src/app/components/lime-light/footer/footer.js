"use client";
// components/Footer.js

import Link from "next/link";
import { useRef, useState } from "react";

import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <footer className="footer">

            {/* Need Help + FAQ */}
            <div className="footer-help">
                <h3>NEED HELP?</h3>
                <div className="faq-box">
                    <span>FAQS</span>
                </div>
            </div>

            {/* Top Section */}
            <div className="footer-top">
                {/* Help Section */}
                <div className="footer-column">
                    <h4>HELP</h4>
                    <ul>
                        <li><Link href="#">Frequently Asked Questions</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Disclaimer</Link></li>
                    </ul>
                </div>

                {/* More From Khaadi */}
                <div className="footer-column">
                    <h4>MORE FROM LIBAAS</h4>
                    <ul>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Cloth Care</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="footer-column">
                    <h4>OUR SOCIALS</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>


                    {/* Newsletter */}
                    <div className="inputbox">
                        <h5>Get the latest news</h5>


                        <div
                            className="newsletter-input"
                            onClick={() => inputRef.current.focus()}
                        >
                            <div className={`input-box ${isFocused ? "focused" : ""}`}>
                                <label className={isFocused ? "active" : ""}>Email Address</label>
                                <input
                                    ref={inputRef}
                                    type="email"
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={(e) => setIsFocused(e.target.value !== "")}
                                />
                            </div>
                            <button>CONFIRM</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom + Copy Wrapper */}
            <div className="footer-bar">
                {/* Left Side */}
                <div className="footer-left">
                    <div className="checkout">
                        <p>100% Safe Checkout</p>
                        <img src="/image.png" alt="payment methods" />
                    </div>
                    <div className="secured">
                        <p>Secured by</p>
                        <img src="/payment.png" alt="godaddy security" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="footer-right">
                    <img src="/logo-nobg.svg" alt="khaadi logo" className="logo" />
                    <p>
                        Copyright © 2025 Weaves Corporation Limited
                        (Formerly Libaas Corporation<br /> Limited). All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
}
