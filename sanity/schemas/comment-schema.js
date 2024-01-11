const comment = {
    name: 'comment',
    title: 'Comments',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }], // Reference to the product schema
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'commentText',
        title: 'Comment',
        type: 'text',
        validation: Rule => Rule.required(),
      },
      {
        name: 'stars',
        title: 'Stars',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
        },
        readOnly: true,
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
  };
  
  export default comment;
  