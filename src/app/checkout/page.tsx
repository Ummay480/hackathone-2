"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { CartItemProps } from "@/types/cart";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const CheckoutPage = () => {
  const cart: CartItemProps[] = useSelector((state: RootState) => state.cart.items);
  const [checkoutSessionId, setCheckoutSessionId] = useState<string>("");

  useEffect(() => {
    const createCheckoutSession = async () => {
      if (cart.length === 0) return;
      try {
        const res = await fetch("/api/stripe", {
          method: "POST",
          body: JSON.stringify({ items: cart }),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Failed to create checkout session");

        const { id } = await res.json();
        setCheckoutSessionId(id);
      } catch (error) {
        console.error("Error creating checkout session:", error);
      }
    };

    createCheckoutSession();
  }, [cart]);

  const handleCheckout = async () => {
    if (!checkoutSessionId) return;
    try {
      if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
        throw new Error("Stripe public key is missing");
      }
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      if (!stripe) throw new Error("Stripe failed to initialize");

      const { error } = await stripe.redirectToCheckout({ sessionId: checkoutSessionId });
      if (error) console.error(error);
    } catch (error) {
      console.error("Error handling checkout:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        <div>
          {cart.map((item: CartItemProps, index: number) => (
            <div key={index}>
              <Image
                src={item.image?.asset?.url || "/fallback-image.jpg"} 
                alt={item.name}
                width={50}
                height={50}
              />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
        <button onClick={handleCheckout} disabled={!checkoutSessionId}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
