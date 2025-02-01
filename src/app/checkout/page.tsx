// // src/app/checkout/page.tsx

// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { loadStripe } from '@stripe/stripe-js';
// import { RootState } from '@/redux/store';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

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

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const  error = await stripe?.redirectToCheckout({ sessionId: checkoutSessionId });
//     if (error) {
//       console.error(error);
//     }
//   };

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
