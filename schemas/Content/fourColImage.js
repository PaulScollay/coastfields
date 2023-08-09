export default 
    {
      name: 'fourColImage',
      type: 'document',
      title: 'Four Column Images',
      fieldsets: [
        {
          name: 'keyfiguresFieldset',
          title: 'Select 4 Images',
          options: { columns: 3 },
        },
      ],
      initialValue: {
        display: 'Four Column Image',
      },
      fields: [
        {
          name: 'display',
          type: 'string',
          title: 'Display as',
          validation: Rule => Rule.required(),

        },
        {
            name: 'imageOnly',
            type: 'boolean',
            title: 'Image Only',
            default: false
          },
        {
          name: 'image1',
          title: 'Image 1',
          type: 'columnImageBlock',
          fieldset: "keyfiguresFieldset"
        },
        {
          name: 'image2',
          title: 'Image 2',
          type: 'columnImageBlock',
          fieldset: "keyfiguresFieldset"
        },
        {
          name: 'image3',
          title: 'Image 3',
          type: 'columnImageBlock',
          fieldset: "keyfiguresFieldset"
        },
        {
          name: 'image4',
          title: 'Image 4',
          type: 'columnImageBlock',
          fieldset: "keyfiguresFieldset"
        },

      ],
      
    }