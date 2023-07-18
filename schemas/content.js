export default {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
      {
        type: 'block'
      },
      {
        type: 'image',
        fields: [
          {
            title: 'Position',
            name: 'position',
            type: 'string',
            options: {
              list: [
                {title: 'Center', value: 'center'},
                {title: 'Left', value: 'left'},
                {title: 'Right', value: 'right'},
              ],
              layout: 'radio',
              isHighlighted: true
            }
          },
          {
            type: 'text',
            name: 'alt',
            title: 'Description',
            options: {
              isHighlighted: true
            }
          }
        ],
        options: {
          hotspot: true
        }
      },
    ]
  }