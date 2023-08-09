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
        validation: (Rule) => Rule.required(),
      },
      {
        type: 'array',
        name: 'contentBlock',
        of: [
          {type: 'block'},
          {
            name: 'contentFeaturedImage',
            type: 'featuredImage',
            title: 'Featured Image'
            
          },
          {
            name: 'gallery',
            type: 'contentGallery',
            title: 'Gallery'
          },
          {
            name: 'contentImageLeftTextRight',
            type: 'imageLeftTextRight',
            title: 'Image Left Text Right'
          },
          {
            name: 'contentImageRightTextLeft',
            type: 'imageRightTextLeft',
            title: 'Image Right Text Left'
          },
           {
            title: 'Full Width Image',
            type: 'fullWidthImage',
            name: 'fullWidthImage',
          },
          {
            title: "2 Column Image",
            type: 'twoColImage'
          },
          {
            title: "3 Column Image",
            type: 'threeColImage'
          },
          {
            title: "4 Column Image",
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
    