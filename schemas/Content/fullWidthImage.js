export default {
    name: 'fullWidthImage',
    type: 'object',
    title: 'Full Width Image',
    initialValue: {
        display: 'Full Width Image',
      },
    fields: [
        {
            name: 'display',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
    
        },
        {
            title: 'Full Width Image',
            type: 'image',
            name: 'Image', 
        },  
        {
            title: 'Text Position',
            name: 'textPosition',
            type: 'string',
            options: {
            list: [
                {title: 'Top of Image', value: 'full-width-image-text-top'},
                {title: 'Bottom of Image', value: 'full-width-image-text-bottom'},
                {title: 'No Text', value: 'full-width-image-no-text'},
            ],
            layout: 'radio',
            isHighlighted: true
            },
            validation: Rule => Rule.required(),
        },
      {
        type: 'text',
        name: 'description',
        title: 'Description',
      }
    ],
    options: {
      hotspot: true
    }
  }
