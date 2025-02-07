import dotenv from 'dotenv';
import sanityClient from '@sanity/lib/client';
import fs from 'fs';

// Load environment variables from .env.local
dotenv.config();

// Sanity client setup
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // Get from .env.local
  dataset: process.env.SANITY_DATASET, // Get from .env.local
  token: process.env.SANITY_API_TOKEN, // Get from .env.local
  useCdn: false, // Set to false to bypass the CDN and get the freshest data
});

// Read the food.json file
const foodData = JSON.parse(fs.readFileSync('data/food.json', 'utf-8')).food;

// Function to create a new document in Sanity for each food item
async function insertData() {
  try {
    const promises = foodData.map(item => {
      return client.create({
        _type: 'food', // Assuming you have a 'food' schema in your Sanity Studio
        name: item.name,
        category: item.category,
        price: item.price,
        originalPrice: item.originalPrice,
        tags: item.tags,
        image: {
          _type: 'image',
          asset: {
            _ref: item.image, // Assuming the image is already uploaded in Sanity, you can use the asset reference here
          },
        },
        description: item.description,
        available: item.available,
      });
    });

    // Wait for all promises to resolve (i.e., all documents to be created)
    await Promise.all(promises);

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data: ', error);
  }
}

// Run the function to insert data
insertData();
