"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "@/redux/slices/cartSlice"; // Corrected import
import type { Product } from '@/types/product'; // Correct Product type import

interface ProductProps {
  product: Product; // Ensure 'product' prop is passed correctly
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  // Check if product is undefined
  if (!product) {
    console.error('Product is undefined!');
    return null; // or return a fallback UI
  }

  const handleAddToCart = () => {
    // Convert id to string before dispatching
    const cartItem = { ...product, id: product.id.toString() };
    dispatch(addToCart(cartItem)); // Dispatching addToCart action with the modified product
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Quantity: {product.quantity}</p>
      <img src={product.image} alt={product.name} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
