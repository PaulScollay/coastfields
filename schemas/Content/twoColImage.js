export default 
    {
      name: 'twoColImage',
      type: 'document',
      title: 'Two Column Images',

      fieldsets: [
        {
          name: 'keyfiguresFieldset',
          title: 'Select 2 Images',
          options: { columns: 2 },
        },

      ],
      initialValue: {
        display: 'Two Column Image',
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

      ],
      
    }