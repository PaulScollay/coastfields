import {defineField, defineType} from 'sanity'

export const fileImages = defineType({
        name: 'fileImages',
        type: 'document',
        fields: [
            {
              name: 'fileImage',
              title: 'Images',
              type: 'array',
                of: [{type: 'image'}],        
            },
    
        ],
      },
)

export const files = defineType({
  name: 'files',
  title: 'Files',
  type: 'document',
  fields: [
    defineField({
        name: 'posters',
        title: 'Posters',
        type: 'fileImages',
      }),
    defineField({
        name: 'brochure',
        title: 'Brochures',
        type: 'fileImages',
      }),
    defineField({
        name: 'menu',
        title: 'Menus',
        type: 'fileImages',
      }),
  ],
})

