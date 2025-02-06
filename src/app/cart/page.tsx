"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
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
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image || "/images/product.jpg"}
                stock={item.stock ?? 0} // Ensure stock is not undefined
                price={item.price}
                quantity={item.quantity}
                onRemove={() => handleRemoveFromCart(item.id)}
              />
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
