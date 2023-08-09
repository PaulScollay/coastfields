export default 
    {
      name: 'popup',
      type: 'document',
      title: 'Popup',
      initialValue: {
        display: 'Popup',
      },
      fields: [
        {
            name: 'display',
            type: 'string',
            title: 'Display as',
            validation: Rule => Rule.required(),

          },
          {
            type: 'array',
            name: 'faqs',
            of: [
              {type: 'block'},
              {type: 'image'},
            ]
        }
      ],
      
    }