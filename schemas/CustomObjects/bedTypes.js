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
          type: 'reference',
          to: { type: 'bedType' },
        }),
    defineField({
        name: 'bedCount',
        title: 'No Of Beds',
        type: 'number',
        options: {
            list: [1,2,3,4,5,6,7,8,9,10],
          },
      }),
  ],
})