export interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
}

export const starters: MenuItem[] = [
  {
    name: "Garlic Bread",
    description: "Crispy garlic bread with herbs",
    calories: 250,
    price: 5,
  },
  {
    name: "Tomato Soup",
    description: "Rich tomato soup with basil",
    calories: 150,
    price: 7,
  },
  {
    name: "Wontons",
    description: "Deep-fried dumplings filled with chicken, beef, or vegetables, served with a chili or soy dipping sauce.",
    calories: 300,
    price: 6.0,
  },
  {
    name: "Spring Rolls",
    description: "Crispy rolls filled with vegetables or spiced chicken, served with tamarind or chili sauce.",
    calories: 250,
    price: 5.0,
  },
  {
    name: "Chicken Bytes",
    description: "Marinated, battered, and deep-fried chicken served with spicy mayo or ketchup.",
    calories: 350,
    price: 6.0,
  },
  {
    name: "Chicken Nuggets",
    description: "Boneless chicken pieces coated in breadcrumbs and fried, served with BBQ or honey mustard sauce.",
    calories: 400,
    price: 5.0,
  },
];
