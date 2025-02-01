interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: string;
  highlight?: boolean;
}

export const DrinksItem: MenuItem[] = [
  {
    name: "Coconut Water",
    description: "Fresh and refreshing coconut water, perfect for hydration.",
    price: "$3",
    calories: 50,
  },
  {
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    price: "$2",
    calories: 100,
  },
  {
    name: "Grapefruit Juice",
    description: "Tangy and refreshing grapefruit juice.",
    price: "$2",
    calories: 90,
  },
  {
    name: "Apple Juice",
    description: "Fresh and sweet apple juice.",
    price: "$2",
    calories: 95,
  },
 
  {
    name: "Melon Shake",
    description: "Refreshing melon shake with a hint of sweetness.",
    price: "$3",
    calories: 220,
  },
 
]
