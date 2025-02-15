import { createCheckoutSession } from '@/lib/stripe';
import { redirect } from 'next/navigation';

export default async function CheckoutPage() {
  const items = [
    {
      name: 'Pizza',
      price: 10.99,
      quantity: 2,
    },
  ];

  // Create a Stripe checkout session
  const session = await createCheckoutSession(items);

  // Redirect to the Stripe checkout page
  redirect(session.url);
}