// @/constant/Starter.ts
interface Starter {
    name: string;
    description: string;
    calories: number;
    price: number;
    highlight?: boolean; // Optional field
  }
  
  // Array of starter items
  export const starters: Starter[] = [
    {
      name: "Wontons",
      description: "Deep-fried dumplings filled with chicken, beef, or vegetables, served with a chili or soy dipping sauce.",
      calories: 300,
      price: 6.00,
    },
    {
      name: "Spring Rolls",
      description: "Crispy rolls filled with vegetables or spiced chicken, served with tamarind or chili sauce.",
      calories: 250,
      price: 5.00,
    },
      {
      name: "Chicken Bytes",
      description: "Marinated, battered, and deep-fried chicken served with spicy mayo or ketchup.",
      calories: 350,
      price: 6.00,
    },
    {
      name: "Chicken Nuggets",
      description: "Boneless chicken pieces coated in breadcrumbs and fried, served with BBQ or honey mustard sauce.",
      calories: 400,
      price: 5.00,
    },
  ];
  
  
  // Exporting starters
  export default starters;
  