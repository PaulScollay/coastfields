export default {
  name: 'venue',
  type: 'document',
  title: 'Venue',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Location Address',
      type: 'address',
      validation: Rule => Rule.required()
  },
  {
      name: 'type',
      title: 'Venu Type',
      type: 'reference',
      to: [{type: 'venueType'}],
      validation: Rule => Rule.required()
  },
  {
    name: 'featuredImage',
    title: 'Featured Image',
    type: 'image',
    validation: Rule => Rule.required()
},
  {
      name: 'venueContent',
      title: 'Venue Content',
      type: 'mediaContent',
  },
  {
    name: 'ShortDescription',
    type: 'text',
    title: 'Short Description'
  },
  {
    name: 'Images',
    title: 'Images',
    type: 'array',
    of: [
      {
        type: 'image',
      },
    ],
  }, 
  ]
}