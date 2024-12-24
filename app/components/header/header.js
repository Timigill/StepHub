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

    return (
        <header>
            <div className="logo">
                <Link href="/"><img src="/Logo.png" alt ="Logo" /></Link>
            </div>
            <div className='links'>
                <Link href="/"><li className='li'>Home</li></Link>
                <Link href="/login"><li className='li'>Login</li></Link>
                <Link href="/products"><li className='li'>Products</li></Link>
                <Link href="/signup"><li className='li'>Signup</li></Link>
                <Link href="/cart">
                    <li className='li'>
                        <span className="span">{cartNotify}</span>Cart
                    </li>
                </Link>
            </div>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link href="/"><li className='dropdown-item'>Home</li></Link>
                <Link href="/login"><li className='dropdown-item'>Login</li></Link>
                <Link href="/products"><li className='dropdown-item'>Products</li></Link>
                <Link href="/signup"><li className='dropdown-item'>Signup</li></Link>
                <Link href="/cart">
                    <li className='dropdown-item'>
                        <span className="span">{cartNotify}</span>Cart
                    </li>
                </Link>
            </div>
        </header>
    );
}

export default Header;