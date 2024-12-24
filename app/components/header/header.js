import React, { useState } from 'react';
import "./header.css";
import Link from 'next/link';
import { useCart } from '@/app/context/cartcontext'; 

function Header() {
    const { cartNotify } = useCart(); 
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false); // Close the dropdown
    };

    return (
        <header>
            <div className="logo">
                <Link href="/"><img src="/Logo.png" alt ="Logo" /></Link>
            </div>
            <div className='links'>
                <Link href="/"><li className='li' onClick={closeDropdown}>Home</li></Link>
                <Link href="/login"><li className='li' onClick={closeDropdown}>Login</li></Link>
                <Link href="/products"><li className='li' onClick={closeDropdown}>Products</li></Link>
                <Link href="/signup"><li className='li' onClick={closeDropdown}>Signup</li></Link>
                <Link href="/cart">
                    <li className='li' onClick={closeDropdown}>
                        <span className="span">{cartNotify}</span>Cart
                    </li>
                </Link>
            </div>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link href="/"><li className='dropdown-item' onClick={closeDropdown}>Home</li></Link>
                <Link href="/login"><li className='dropdown-item' onClick={closeDropdown}>Login</li></Link>
                <Link href="/products"><li className='dropdown-item' onClick={closeDropdown}>Products</li></Link>
                <Link href="/signup"><li className='dropdown-item' onClick={closeDropdown}>Signup</li></Link>
                <Link href="/cart">
                    <li className='dropdown-item' onClick={closeDropdown}>
                        <span className="span">{cartNotify}</span>Cart
                    </li>
                </Link>
            </div>
        </header>
    );
}

export default Header;