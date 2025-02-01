// src/app/api/items/route.ts
import { NextResponse } from 'next/server';

const items = [
  { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', price: 12.99, imageUrl: '/images/pizza.jpg' },
  { id: '2', name: 'Burger', description: 'Juicy beef burger', price: 8.99, imageUrl: '/images/burger.jpg' },
  // Add more items
];

export async function GET() {
  return NextResponse.json({ items });
}
