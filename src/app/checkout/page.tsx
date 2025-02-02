<<<<<<< HEAD
// // src/app/checkout/page.tsx

// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { loadStripe } from '@stripe/stripe-js';
// import { RootState } from '@/redux/store';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
=======
"use client";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div>
      <NavBar/>
      <HeroBanner title="Checkout" />
>>>>>>> 4d59b815b5607b542703f006c219c0d47e5dad44

// const CheckoutPage = () => {
//   const cart = useSelector((state: RootState) => state.cart.items);
//   const [checkoutSessionId, setCheckoutSessionId] = useState<string>('');

//   useEffect(() => {
//     const createCheckoutSession = async () => {
//       const res = await fetch('/api/stripe', {
//         method: 'POST',
//         body: JSON.stringify({ items: cart }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const { id } = await res.json();
//       setCheckoutSessionId(id);
//     };

//     createCheckoutSession();
//   }, [cart]);

<<<<<<< HEAD
//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const  error = await stripe?.redirectToCheckout({ sessionId: checkoutSessionId });
//     if (error) {
//       console.error(error);
//     }
//   };
=======
          {/* Right Column - Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/chicken-tikka.png
                      alt="Chicken Tikka"
                      width={64}
                      height={64}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Chicken Tikka</h3>
                    <p className="text-sm text-gray-500">Delicious chicken tikka</p>
                    <p className="text-sm text-gray-500">$50</p>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> 4d59b815b5607b542703f006c219c0d47e5dad44

//   return (
//     <div className="checkout-page">
//       <h1 className="text-3xl">Checkout</h1>
//       <button onClick={handleCheckout} className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-md">
//         Proceed to Stripe Checkout
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
