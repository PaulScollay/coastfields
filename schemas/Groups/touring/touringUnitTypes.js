export default {
    name: 'touringUnitType',
    type: 'document',
    title: 'Touring Unit Types',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      }
    ]
  }

