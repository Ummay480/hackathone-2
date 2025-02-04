export default {
  name: 'menuItem',
  type: 'document',
  title: 'Menu Item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Item Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Select category (e.g., Lunch, Breakfast, Dinner, Snacks, Fast Food, Dessert, Drink, Healthy Diet)',
      options: {
        list: [
          'Lunch',
          'Breakfast',
          'Dinner',
          'Snacks',
          'Fast Food',
          'Dessert',
          'Drink',
          'Healthy Diet',
        ],
      },
    },
    {
      name: 'varieties',
      type: 'array',
      title: 'Varieties',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Variety Name',
            },
            {
              name: 'price',
              type: 'number',
              title: 'Price',
              description: 'Price of this variety',
            },
          ],
        },
      ],
      description: 'Different variations of this food item with separate prices',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the menu item',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Item Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Original price before discount (if any)',
    },
    {
      name: 'calories',
      type: 'number',
      title: 'Calories',
      description: 'Caloric value of the dish (optional)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      description: 'Tags related to the dish (e.g., Healthy, Spicy, Popular)',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Availability status of the item',
    },
    {
      name: 'menu',
      type: 'reference',
      title: 'Menu Category',
      to: [{ type: 'menu' }],
      description: 'Reference to the menu category this item belongs to',
    },
  ],
};
