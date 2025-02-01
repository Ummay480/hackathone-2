"use client";

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
      <h2>Your Cart</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <CartItem {...item} onRemove={() => handleRemoveFromCart(item.id)} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
