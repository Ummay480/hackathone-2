// src/app/api/items/route.ts
import { NextResponse } from 'next/server';

const items = [
  {
    "name": "Naan/Kulcha with Beef Paya",
    "category": "Breakfast Items",
    "price": 6,
    "description": "Soft naan or kulcha served with tender beef paya in rich gravy.",
    "calories": 600,
    "image": "https://www.imghippo.com/i/fdoM1030uIQ.png"
  },
  {
    "name": "2-Kabab Paratha",
    "category": "Breakfast Items",
    "price": 5,
    "description": "Two juicy kebabs wrapped in soft paratha.",
    "calories": 500,
    "image": "https://www.imghippo.com/i/oGM7037cYo.png"
  },
  {
    "name": "Omelette Paratha",
    "category": "Breakfast Items",
    "price": 4,
    "description": "Fluffy omelette wrapped in warm, crispy paratha.",
    "calories": 400,
    "image": "https://www.imghippo.com/i/XOd9521pDc.png"
  },
  {
    "name": "Lacha Paratha",
    "category": "Breakfast Items",
    "price": 3,
    "description": "Crispy, flaky paratha served with chutney.",
    "calories": 350,
    "image": "https://www.imghippo.com/i/xG2699Q.png"
  },
  {
    "name": "Naan/Paratha with Chana",
    "category": "Breakfast Items",
    "price": 4,
    "description": "Soft naan or paratha served with spiced chickpeas.",
    "calories": 450,
    "image": "https://www.imghippo.com/i/WVV3427KsM.jpg"
  },
  {
    "name": "Halwa Poori",
    "category": "Breakfast Items",
    "price": 5,
    "description": "Classic breakfast of puri, sweet halwa, and chana masala.",
    "calories": 700,
    "image": "https://www.imghippo.com/i/sjf1775k.jpg"
  },
  {
    "name": "Qeema Kachori",
    "category": "Breakfast Items",
    "price": 4,
    "description": "Fried kachori stuffed with flavorful minced meat.",
    "calories": 600,
    "image": "https://www.imghippo.com/i/UlZ3564Ueg.jpg"
  },
  {
    "name": "Sandwich",
    "category": "Breakfast Items",
    "price": 3,
    "description": "Simple and delicious sandwich with fillings of your choice.",
    "calories": 350,
    "image": "https://www.imghippo.com/i/UCl7144KgA.jpg"
  },
  {
    "name": "Shami Kabab",
    "category": "Snacks Items",
    "price": 4,
    "description": "Flavorful minced meat kebabs served with naan or chutney.",
    "calories": 300,
    "image": "https://www.imghippo.com/i/JCE8933J.jpg"
  },
  {
    "name": "Chicken Patties",
    "category": "Snacks Items",
    "price": 3,
    "description": "Crispy pastry filled with seasoned chicken filling.",
    "calories": 250,
    "image": "https://www.imghippo.com/i/pgJG8932ixQ.jpg"
  },
  {
    "name": "Vegetable Roll",
    "category": "Snacks Items",
    "price": 3,
    "description": "Healthy and delicious vegetable roll with a tangy sauce.",
    "calories": 220,
    "image": "https://www.imghippo.com/i/IIL4134tkM.jpg"
  },
  {
    "name": "Aloo Samosa",
    "category": "Snacks Items",
    "price": 2,
    "description": "Crispy samosas filled with spiced mashed potatoes.",
    "calories": 200,
    "image": "https://www.imghippo.com/i/GdEf9719kuY.png"
  },
  {
    "name": "Chicken Shawarma",
    "category": "Snacks Items",
    "price": 5,
    "description": "Grilled chicken wrapped in pita bread with garlic sauce.",
    "calories": 500,
    "image": "https://www.imghippo.com/i/iU6509Mms.jpeg"
  },
  {
    "name": "Beef Biryani",
    "category": "Main Course",
    "price": 8,
    "description": "Fragrant rice layered with tender beef, cooked with aromatic spices.",
    "calories": 750,
    "image": "https://www.imghippo.com/i/tKHr2091cE.png"
  },
  {
    "name": "Chicken Karahi",
    "category": "Main Course",
    "price": 7,
    "description": "Spicy chicken curry cooked in a wok with tomatoes, ginger, and green chilies.",
    "calories": 700,
    "image": "https://www.imghippo.com/i/wmaX6454rNQ.png"
  },
  {
    "name": "Mutton Nihari",
    "category": "Main Course",
    "price": 9,
    "description": "Slow-cooked mutton stew with a rich gravy and aromatic spices.",
    "calories": 800,
    "image": "https://www.imghippo.com/i/xXRu7538Dxw.jpg"
  },
  {
    "name": "Vegetable Pulao",
    "category": "Main Course",
    "price": 6,
    "description": "Fragrant rice cooked with mixed vegetables and mild spices.",
    "calories": 600,
    "image": "https://www.imghippo.com/i/BCT7583uM.jpg"
  },
  {
    "name": "Chai",
    "category": "Beverages",
    "price": 2,
    "description": "Traditional tea made with tea leaves, milk, and spices.",
    "calories": 150,
    "image": "https://www.imghippo.com/i/lzs1050viI.png"
  },
  {
    "name": "Lassi",
    "category": "Beverages",
    "price": 3,
    "description": "Cool and refreshing yogurt drink, served sweet or salted.",
    "calories": 250,
    "image": "https://www.imghippo.com/i/SsqM8647OCQ.png"
  },
  {
    "name": "Coffee",
    "category": "Beverages",
    "price": 2,
    "description": "Strong brewed coffee served hot.",
    "calories": 100,
    "image": "https://www.imghippo.com/i/NCOD4359diE.jpg"
  },
  {
    "name": "Fresh Lime",
    "category": "Drink",
    "price": 38,
    "originalPrice": 45,
    "tags": [
      "Healthy",
      "Popular"
    ],
    "image": "https://sanity-nextjs-rouge.vercel.app/food/food-1.png",
    "description": "Refreshing fresh lime drink made with natural ingredients.",
    "available": true
  },
    {
    "name": "Lassi",
    "category": "Drink",
    "price": 3,
    "description": "Cool and refreshing yogurt drink, served sweet or salted.",
    "calories": 250,
    "image": "https://www.imghippo.com/i/Lnv6151ZBc.png"
  }
  ]

export async function GET() {
  return NextResponse.json({ items });
}
