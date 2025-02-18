// src/types/index.ts
export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: {
      asset?: {
        url?: string;
      };
    imageUrl: string;
  }
}