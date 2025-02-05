"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/slices/cartSlice";
import CartItem from "@/components/CartItems";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <NavBar />
      <HeroBanner title="Your Shopping Cart" />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        {cart.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.items.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-lg text-center">
                <Image src={item.image || "/images/product.jpg"} width={300} height={200} alt={item.name} className="mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                <p className="text-lg font-bold text-gray-700">${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                {item.stock > 0 ? (
                  <button 
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                ) : (
                  <p className="mt-2 text-red-600 font-bold">Out of Stock</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
