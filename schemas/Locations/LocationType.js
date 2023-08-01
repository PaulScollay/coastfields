export default {
    name: 'LocationType',
    type: 'document',
    title: 'Location Type',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
      }
    ]
  }
