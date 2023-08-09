export default {
    name: 'content',
    type: 'document',
    title: 'Content',
    
    fields: [
      {
        name: 'contentTitle',
        type: 'string',
        title: 'Content Title',
        validation: Rule => Rule.required()
      },
      {
        title: 'Handleized name (Slug)',
        name: 'handle',
        type: 'slug',
        options: {
          source: 'contentTitle',
          disableArrayWarning: true,
        },
        description: "",
        validation: (Rule) => Rule.required(),
      },
      {
        type: 'array',
        name: 'contentBlock',
        of: [
          {type: 'block'},
          {
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image'
          },



          {
            name: 'gallery',
            type: 'contentGallery',
            title: 'Gallery'
          },
          {
            name: 'textImageLeftRight',
            type: 'textImageLeftRight',
            title: 'Text Image Left/Right'
          },
           {
            title: 'Image with text',
            type: 'image',
            fields: [
              {
                title: 'Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Center Align', value: 'center'},
                    {title: 'Left Align', value: 'left'},
                    {title: 'Right Align', value: 'right'},
                  ],
                  layout: 'radio',
                  isHighlighted: true
                }
              },
              {
                type: 'text',
                name: 'description',
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


          {
            title: "2 Images",
            type: 'twoColImage'
          },
          {
            title: "3 Images",
            type: 'threeColImage'
          },
          {
            title: "4 Images",
            type: 'fourColImage'
          },
          {
            name: 'contentTable',
            type: 'contentTable',
            title: 'Table'
          },
          {
            name: 'poster',
            title: 'Poster',
            type: 'image',
          },
          {
            name: 'menu',
            title: 'Menu',
            type: 'image',
          },
          {
            name: 'brochure',
            title: 'Brochure',
            type: 'image',
          },
        ]
      }
    ]
} 
    