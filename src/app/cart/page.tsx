"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import CartItem from "@/components/CartItemComponent";
import { FoodItem } from "@/types/food";
import { CartItemProps } from "@/types/cart";

// Define CartState correctly
interface CartState {
  items: CartItemProps[];
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  
  // Use correct RootState and ensure type safety
  const cart = useSelector((state: RootState) => state.cart) as CartState;

  // Convert FoodItem to CartItemProps correctly
  const handleAddToCart = (item: FoodItem) => {
    const cartItem: CartItemProps = {
      id: item.id,
      name: item.name,
      category: item.category,
      description: item.description,
      image: item.image ?? {}, // Ensure correct image structure
      stock: item.stock,
      price: item.price,
      quantity: 1,
      item,
      onAdd: () => handleAddToCart(item),
      onRemove: () => handleRemoveFromCart(item.id),
    };

    dispatch(addToCart(cartItem));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <NavBar />
      <HeroBanner title="Your Shopping Cart" />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {/* Check for `cart.items` safely */}
        {cart?.items?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.items.map((item) => (
              <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category} // ✅ Ensure CartItemProps expects it
              description={item.description}
              image={item.image ?? {}}
              stock={item.stock}
              price={item.price}
              quantity={item.quantity}
              onAdd={() => handleAddToCart(item.item)}  // ✅ Fixed parenthesis
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
