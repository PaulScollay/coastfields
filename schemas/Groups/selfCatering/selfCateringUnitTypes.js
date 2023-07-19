export default {
    name: 'selfCateringUnitType',
    type: 'document',
    title: 'Self Catering Unit Types',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      }
    ]
  }

