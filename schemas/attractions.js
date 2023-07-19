export default {
    name: 'attraction',
    type: 'document',
    title: 'Attraction',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      }
    ]
  }