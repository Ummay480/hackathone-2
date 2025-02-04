export default {
  name: "menuItem",
  type: "document",
  title: "Menu Item",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "price",
      type: "number",
      title: "Price"
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }]
    }
  ]
};
