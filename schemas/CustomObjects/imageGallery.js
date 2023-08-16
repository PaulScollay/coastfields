import {defineField, defineType} from 'sanity'

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'imageGallery',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
}

// defineField({
//     name: 'form',
//     type: 'string',
//     description: 'Select form type',
//     options: {
//       list: ['newsletter', 'register', 'contact'],
//     },
//   }),