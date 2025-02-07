"use client"; // Ensure it's a client component

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItems } from "@/types/cart";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  const cart: CartItems[] = useSelector((state: RootState) => state.cart.items);
  const [checkoutSessionId, setCheckoutSessionId] = useState<string>("");

  useEffect(() => {
    const createCheckoutSession = async () => {
      if (cart.length === 0) return; // Prevent API call if cart is empty
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
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
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
          {cart.map((item: CartItems, index: number) => (
            <div key={index}>
              <img src={item.imageUrl} alt={item.name} width={50} height={50} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
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
