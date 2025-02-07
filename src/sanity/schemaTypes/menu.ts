const menuSchema= {
    name: "menu",
    type: "document",
    title: "Menu",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Menu Title",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
      },
    ],
  };
  export default menuSchema;