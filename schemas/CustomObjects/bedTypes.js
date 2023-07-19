import {defineField, defineType} from 'sanity'

export const bedType = defineType({
  name: 'bedType',
  title: 'Bed Types',
  type: 'document',
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
    }),

  ],
})

export const bedTypeCount = defineType({
  name: 'bedTypeCount',
  title: 'Bed Types',
  type: 'object',
  fields: [
    defineField({
      name: 'Name',
      type: 'array',
      of: [
        {
          type: 'bedType',
        },
      ],
    }),
    defineField({
        name: 'bedCount',
        type: 'number',
      }),
  ],
})