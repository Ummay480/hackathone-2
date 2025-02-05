// components/CartItems.tsx
import React from "react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: () => void; // Add this line
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, onRemove }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
