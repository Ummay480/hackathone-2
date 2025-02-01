// components/Product/ProductCard.tsx
import React from 'react';
import { CartItem } from '@/types/react-use-cart';
import CartButton from '@/components/Cart/CartButton';

interface ProductCardProps {
  product: CartItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <CartButton item={product} />
    </div>
  );
};

export default ProductCard;
