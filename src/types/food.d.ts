export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category:string;
  price: number;
  category: string;
  image?: {
    string?: string;
    asset?: {
      url?: string;
    };
  };
}

