"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { addItem, removeItem } from "@/lib/redux/slices/cartSlice";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import CartItem from "@/components/CartItemComponent";
import { FoodItem, CartItemProps } from "@/types/cart";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();

  // Use RootState to get the cart state
  const cart = useSelector((state: RootState) => state.cart);

  // Convert FoodItem to CartItemProps
  const handleAddToCart = (item: FoodItem) => {
    const cartItem: CartItemProps = {
      id: item.id,
      name: item.name,
      item: item.id, // Ensure this matches the expected type in CartItemProps
      category: item.category,
      description: item.description,
      image: item.image ?? {}, // Ensure image is an object or provide a default
      stock: item.stock,
      price: item.price,
      quantity: 1,
      onAdd: () => handleAddToCart(item),
      onRemove: () => handleRemoveFromCart(item.id),
    };

    dispatch(addItem(cartItem)); // Use addItem instead of addToCart
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id)); // Use removeItem instead of removeFromCart
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
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                item={item.id} // Pass the item ID as required by CartItemProps
                category={item.category}
                description={item.description}
                image={item.image ?? {}}
                stock={item.stock}
                price={item.price}
                quantity={item.quantity}
                onAdd={() => handleAddToCart(item)}
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