interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: string;
  highlight?: boolean;
}

export const DessertItem: MenuItem[] = [
    {
      name: "Brownies",
      description: "Rich, fudgy brownies with a chocolatey delight.",
      calories: 450,
      price: "$4",
    },
    {
      name: "Cupcake",
      description: "Deliciously soft cupcakes topped with creamy frosting.",
      calories: 350,
      price: "$3",
    },
    {
      name: "Tea Cake",
      description: "Light and fluffy tea cake with a hint of vanilla.",
      calories: 300,
      price: "$3",
    },
    {
      name: "Chip Cookies",
      description: "Crispy cookies filled with chocolate chips.",
      calories: 250,
      price: "$2",
    },
    {
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake with chocolate ganache.",
      calories: 600,
      price: "$5",
    },
  ]