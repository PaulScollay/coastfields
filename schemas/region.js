export default {
    name: 'region',
    type: 'document',
      title: 'Region',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'parks',
        title: 'Parks',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'park' },
          },
        ],
      },
    ]
  }