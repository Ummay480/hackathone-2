import React from 'react';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  removeFromCart: (id: string) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ id, name, price, quantity, removeFromCart }) => (
  <div className="flex justify-between items-center">
    <span>{name}</span>
    <span>{quantity} x ${price}</span>
    <button onClick={() => removeFromCart(id)} className="text-red-500">Remove</button>
  </div>
);

export default CartItemComponent;
