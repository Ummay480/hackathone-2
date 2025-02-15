"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../lib/redux/store";
import { removeItem } from "../lib/redux/slices/cartSlice"; // Updated import
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId)); // Updated action
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;