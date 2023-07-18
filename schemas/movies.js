export default {
    name: 'movies',
    type: 'document',
      title: 'Movies',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'people',
        title: 'People',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'person' },
          },
        ],
      },
    ]
  }