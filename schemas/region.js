export default {
    name: 'region',
    type: 'document',
      title: 'Region',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      },
      {
        name: 'locations',
        title: 'locations',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'location' },
          },
        ],
      },
      {
        name: 'attractions',
        title: 'Attractions',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'attraction' },
          },
        ],
      },
      {
        name: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      }, 
    ]
  }