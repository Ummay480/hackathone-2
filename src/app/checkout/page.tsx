// // src/app/checkout/page.tsx

// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/redux/store';
// import { CartItem } from '@/types/cart';

// const CheckoutPage = () => {
//   const cart = useSelector((state: RootState) => state.cart.items);  // Ensure this is typed as CartItem[]
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
//     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
//     const { error } = await stripe?.redirectToCheckout({ sessionId: checkoutSessionId });
//     if (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <div>
//         <h2>Order Summary</h2>
//         <div>
//           {cart.map((item: CartItem, index: number) => (
//             <div key={index}>
//               <img src={item.imageUrl} alt={item.name} width={50} height={50} />
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>${item.price}</p>
//             </div>
//           ))}
//         </div>
//         <button onClick={handleCheckout}>Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
