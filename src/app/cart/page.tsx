"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice"; 
import CartItem from "@/components/CartItemComponent";
import { FoodItem } from "@/types/food"; 
import { CartItemProps } from "@/types/cart"; 

// ✅ Define CartState correctly
interface CartState {
  items: CartItemProps[];
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart) as CartState;

  // ✅ Convert FoodItem to CartItemProps correctly
  const handleAddToCart = (item: FoodItem) => {
    const cartItem: CartItemProps = {
      id: item.id,
      name: item.name,
      image: item.image ? { asset: { url: item.image } } : undefined, // ✅ Ensure image structure matches CartItemProps
      price: item.price,
      quantity: 1,
      stock: item.stock ?? 10, // ✅ Provide a default stock value
      item, // ✅ Store original FoodItem
      onRemove: () => handleRemoveFromCart(item.id), // ✅ Ensure onRemove is a function
      onAdd: () => handleAddToCart(item), // ✅ Ensure onAdd is a function
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
        
        {/* ✅ Check for `cart.items` safely */}
        {cart?.items?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id} // ✅ Add this line
              name={item.name}
              image={item.image} 
              price={item.price}
              quantity={item.quantity || 1}
              stock={item.stock}
              onRemove={() => handleRemoveFromCart(item.id)}
              onAdd={() => handleAddToCart(item.item)} 
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
