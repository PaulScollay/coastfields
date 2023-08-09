import years from './year-list'

export default {
  name: 'year',
  title: 'Model',
  type: 'document',
  fields: [
    {
      title: 'Year',
      name: 'year',
      type: 'number',
      options: {
        list: [
          ...years
        ],
      }
    }
  ]
}

