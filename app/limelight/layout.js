'use client';
import 'react-toastify/dist/ReactToastify.css';
import "./limelight.css";
import { useState } from 'react';
import React from 'react';
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head><title>StepHub</title><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link></head>
            <body>
                  <main>
                        {children}
                    </main>
            </body>
        </html>
    );
}