// const CheckoutForm: React.FC = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const totalAmount = useSelector((state: RootState) => state.cart.totalAmount); // ✅ Use totalAmount
  
//     const handleSubmit = async (event: React.FormEvent) => {
//       event.preventDefault();
//       if (!stripe || !elements) return;
  
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardElement)!,
//       });
  
//       if (!error) {
//         console.log("Payment Success:", paymentMethod);
//         alert("Payment successful!");
//       } else {
//         console.log("Payment Error:", error);
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>Pay ${totalAmount}</button> {/* ✅ Works correctly now */}
//       </form>
//     );
//   };
  