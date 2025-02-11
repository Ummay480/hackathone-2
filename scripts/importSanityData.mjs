import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2025-02-02',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching menuItems from API...');
    const menuItemsResponse = await axios.get('http://localhost:3000/api/foods');
    const menuItems = menuItemsResponse.data;

    console.log(`Fetched ${menuItems.length} menuItems`);

    for (const item of menuItems) {
      console.log(`Processing menuItem: ${item.title}`);
      let imageRef = null;
      if (item.image) {
        imageRef = await uploadImageToSanity(item.image);
      }
      const sanityMenuItem = {
        _type: 'menuItem',
        name: item.title,
        description: item.description,
        price: item.price,
        discountPercentage: 0,
        priceWithoutDiscount: item.price,
        rating: item.rating?.rate || 0,
        ratingCount: item.rating?.count || 0,
        tags: item.category ? [item.category] : [],
        sizes: [],
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
      };
      console.log('Uploading menuItem to Sanity:', sanityMenuItem.name);
      const result = await client.create(sanityMenuItem);
      console.log(`MenuItem uploaded successfully: ${result._id}`);
    }

    console.log('Menu items import completed successfully!');
  } catch (error) {
    console.error('Error importing menu items:', error);
  }
}

importData();
