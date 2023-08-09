export default 
    {
      name: 'faqs',
      type: 'document',
      title: 'FAQs',
      initialValue: {
        display: 'FAQs',
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
            ]
        }
      ],
      
    }