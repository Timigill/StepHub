'use client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/footer';
import "./globals.css";
import Header from './components/header/header';
import { useState } from 'react';
import React from 'react';
import { CartProvider } from "./context/cartcontext";

export default function RootLayout({ children }) {
    const [user, setUser ] = useState(null); 

    return (
        <html lang="en">
            <head><title>StepHub</title><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link></head>
            


            <body>
                <CartProvider>
                    <Header />
                    <ToastContainer /> {/* Ensure ToastContainer is within CartProvider */}
                    <main>
                        {React.cloneElement(children, { setUser  })}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}