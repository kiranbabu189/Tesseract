const MODEL = {
  defaults: {
    Products: [],
  },
  schema: {
    Products: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          name: {
            type: "string",
          },
          price: {
            type: "number",
          },
          quantity: {
            type: "number",
          },
          barcode: {
            type: "string",
          },
        },
        required: ["id","name","price","quantity","barcode"],
      },
    },
  },
}

export default MODEL;
