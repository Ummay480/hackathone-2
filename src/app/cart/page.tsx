"use client"
import React, { useState } from "react";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

  const handleQuantityChange = (id: number, amount: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + amount) }
          : product
      )
    );
  };

  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const applyCoupon = () => {
    setDiscount(coupon === "DISCOUNT10" ? 10 : 0);
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const newItem: Product = {
      id: products.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      quantity: 1,
      image: newProduct.image || "/default.jpg",
    };
    setProducts([...products, newItem]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const total = subtotal - (subtotal * discount) / 100;

  return (
    <div>
      <NavBar/>
      <HeroBanner title="Cart"/>
  
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="border p-2"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={addProduct} className="bg-green-500 text-white p-2">Add Product</button>
      </div>
      {products.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="flex items-center gap-2">
                  {product.image && <Image src={product.image} alt={product.name} width={50} height={50} />}
                  {product.name}
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleQuantityChange(product.id, -1)} className="mx-2">-</button>
                  {product.quantity}
                  <button onClick={() => handleQuantityChange(product.id, 1)} className="mx-2">+</button>
                </td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
                <td>
                  <FaTrash className="cursor-pointer" onClick={() => handleRemove(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      )}

      <div className="flex justify-between mt-6">
        <div>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="border p-2"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon} className="bg-[#FF9F0D] p-2 ml-2">Apply</button>
        </div>
        <div>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Discount: {discount}%</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
          <button className="bg-[#FF9F0D] p-3 text-white mt-2">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShoppingCart;
