'use client'; 

import React from 'react';
import { useParams } from 'next/navigation';
import products from '@/app/api/products/page'; 
import { useCart } from '@/app/context/cartcontext'; 
import './productdetails.css'; 

const ProductDetails = () => {
    const { id } = useParams(); 
    const { addToCart } = useCart(); 

    const product = products.find((item) => item.id === Number(id));

    if (!product) {

        return <p>Product not found. Please check the URL.</p>;
    }

    const handleAddToCart = () => {
       
        addToCart(product);
    };

    return (
        <div className="product-details">
            <img className="Pimg" src={product.imageUrl} alt={product.name} />
             <div className="product-info">
                <h1 className="Pname">{product.name}</h1>
                <p className="Pdescription">{product.innerdescription}</p>
                <p className="Pprice">Price: ${product.price.toFixed(2)}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
