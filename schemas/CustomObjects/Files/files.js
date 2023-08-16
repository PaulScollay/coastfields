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
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    columns: 1,
    modal: {type: 'popover'} //Makes the modal type a popover
  },
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

