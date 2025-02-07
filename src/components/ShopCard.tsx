"use client"
import React from "react";
import { Product } from "@/types/food"; // Adjust path as needed
import Link from "next/link";

interface ProductCardProps {
  product: Product;        // Ensure the `product` prop is correctly typed
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow relative group">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">
        ${product.price}{" "}
        {product.oldPrice && (
          <span className="line-through text-sm text-gray-500">
            ${product.oldPrice}
          </span>
        )}
      </p>
      
      {/* Button shown only on hover */}
      <Link href="./cart">
      <button
        onClick={() => addToCart(product)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
       </Link>
    </div>
  );
};

export default ProductCard;
