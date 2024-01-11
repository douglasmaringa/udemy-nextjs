// contact.js

const contact = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'issue',
        title: 'Issue',
        type: 'text',
        validation: Rule => Rule.required(),
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
  
  export default contact;
  