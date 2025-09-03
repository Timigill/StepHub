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
                    <svg width="38" height="37" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5835 4.79175V10.9584C21.5835 11.3673 21.7459 11.7594 22.035 12.0485C22.3242 12.3377 22.7163 12.5001 23.1252 12.5001H29.2918" stroke="#520006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M26.2085 32.5417H10.7918C9.97408 32.5417 9.18982 32.2169 8.61158 31.6387C8.03335 31.0604 7.7085 30.2762 7.7085 29.4584V7.87508C7.7085 7.05733 8.03335 6.27307 8.61158 5.69484C9.18982 5.1166 9.97408 4.79175 10.7918 4.79175H21.5835L29.2918 12.5001V29.4584C29.2918 30.2762 28.967 31.0604 28.3887 31.6387C27.8105 32.2169 27.0262 32.5417 26.2085 32.5417Z" stroke="#520006" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25.0039 20.0846C24.7948 20.3366 24.5666 20.5315 24.3193 20.6694C24.0769 20.8072 23.7964 20.8762 23.4779 20.8762C23.0452 20.8762 22.6982 20.7597 22.4367 20.5267C22.18 20.2938 22.0136 19.9681 21.9375 19.5498C21.4003 19.4452 20.9771 19.1884 20.6681 18.7796C20.3591 18.366 20.2046 17.8692 20.2046 17.2891C20.2046 16.866 20.2997 16.4809 20.4898 16.1339C20.68 15.7821 20.9462 15.5063 21.2885 15.3066C21.6308 15.1022 22.0183 15 22.4509 15C22.9026 15 23.2972 15.0998 23.6347 15.2995C23.9723 15.4944 24.2314 15.7654 24.4121 16.1125C24.5975 16.4595 24.6902 16.8518 24.6902 17.2891C24.6902 17.6647 24.6189 18.0118 24.4762 18.3303C24.3336 18.6441 24.1316 18.9079 23.8701 19.1219C23.6086 19.3358 23.3043 19.4784 22.9573 19.5498C23.0619 19.8588 23.2687 20.0133 23.5777 20.0133C23.7441 20.0133 23.8938 19.9753 24.027 19.8992C24.1601 19.8279 24.3003 19.7138 24.4477 19.5569L25.0039 20.0846ZM21.2101 17.2963C21.2101 17.7146 21.3218 18.0522 21.5453 18.3089C21.7735 18.5609 22.073 18.6869 22.4438 18.6869C22.8146 18.6869 23.1142 18.5609 23.3424 18.3089C23.5706 18.0522 23.6847 17.7146 23.6847 17.2963C23.6847 16.8779 23.5729 16.5427 23.3495 16.2908C23.126 16.0388 22.8289 15.9128 22.4581 15.9128C22.0872 15.9128 21.7854 16.0388 21.5524 16.2908C21.3242 16.5427 21.2101 16.8779 21.2101 17.2963Z" fill="#520006"></path>
                        <path d="M16.2791 19.5212H15.2808L17.0137 15.0713H18.1547L19.8804 19.5212H18.8535L18.4684 18.4587H16.6571L16.2791 19.5212ZM17.5628 15.9128L16.9281 17.6243H18.1975L17.5628 15.9128Z" fill="#520006"></path>
                        <path d="M12.9984 19.5212H12V15.0713H15.2447V15.9912H12.9984V16.9753H14.9595V17.8881H12.9984V19.5212Z" fill="#520006"></path>
                        <path d="M12 29H20M12 26H25.5M12 23H25.5" stroke="#520006" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
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
