export default 
    {
      name: 'featuredImage',
      type: 'document',
      title: 'featuredImage',
      initialValue: {
        display: 'Featured Image',
      },
      fields: [
        {
            name: 'display',
            type: 'string',
            title: 'Display as',
            validation: Rule => Rule.required(),

          },
          {
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image'
            
          },

      ],
      
    }