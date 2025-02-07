// src/types/cart.ts

import { Product } from '@/types/product'; // Ensure correct import

export interface CartItems extends Product {
  quantity: number;
    id: string;
    name: string;
    description: string;  // Required description field
    price: number;
    imageUrl: string; 
    stock:number;    // Required image URL field
  }
  