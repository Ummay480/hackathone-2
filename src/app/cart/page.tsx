"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { addToCart, removeFromCart } from "@/lib/redux/slices/cartSlice";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import CartItem from "@/components/CartItemComponent";
import { FoodItem, CartItemProps } from "@/types/cart";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  // Convert FoodItem to CartItemProps
  const handleAddToCart = (item: FoodItem) => {
    const cartItem: CartItemProps = {
      id: item.id,
      name: item.name,
      category: item.category,
      description: item.description,
      image: item.image || "/images/placeholder.jpg", // Ensure a valid image URL
      stock: item.stock,
      price: item.price,
      quantity: 1,
    };

    dispatch(addToCart(cartItem)); // Corrected function call
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id })); // Ensure the correct action payload
  };

  return (
    <div>
      <NavBar />
      <HeroBanner title="Your Shopping Cart" />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {/* Safely check for cart items */}
        {cart.items && cart.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                image={item.image}
                stock={item.stock}
                price={item.price}
                quantity={item.quantity}
                onAdd={item.onAdd}
                onRemove={item.onRemove}
              />
            ))}

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
