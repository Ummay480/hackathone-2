interface MenuItem {
    name: string;
    description: string;
    calories?: number;
    price: string;
    image?: string;
    category?: string;
    highlight?: boolean;
  }
  
  export const DessertItem: MenuItem[] = [
    {
      name: "Chicken Nihari",
      description: "Slow-cooked chicken in a rich, flavorful curry.",
      price: "$8",
      image: "/images/chicken-nihari.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Karahi",
      description: "Traditional chicken curry cooked in a wok with aromatic spices.",
      price: "$8",
      image: "/images/chicken-karahi.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Tikka",
      description: "Grilled chicken marinated with spices, served with naan.",
      price: "$6",
      image: "/images/chicken-tikka-breast.png",
      category: "Dinner",
    },
    {
      name: "Behari Kabab",
      description: "Tender, spiced beef kebabs grilled to perfection.",
      price: "$7",
      image: "/images/behari-kabab.jpg",
      category: "Dinner",
    },
  ];
  