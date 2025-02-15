'use server';

import { createCheckoutSession } from '@/lib/stripe';
import { redirect } from 'next/navigation';

export async function handleCheckout(items: any[]) {
  // Create a Stripe checkout session
  const session = await createCheckoutSession(items);

  // Redirect to the Stripe checkout page
  redirect(session.url);
}