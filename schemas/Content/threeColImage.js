export default 
    {
      name: 'threeColImage',
      type: 'document',
      title: 'Three Column Images',
      fieldsets: [
        {
          name: 'keyfiguresFieldset',
          title: 'Select 3 Images',
          options: { columns: 3 },
        },
      ],
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

      ],
      
    }