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



  // {
  //   name: 'date',
  //   title: 'Date',
  //   type: 'datetime',
  //   validation: Rule => Rule.required()
  // },
  // {
  //   name: 'author',
  //   title: 'Author',
  //   type: 'reference',
  //   to: [{type: 'author'}],
  //   validation: Rule => Rule.required()
  // },
  // {
  //   name: 'slug',
  //   type: 'slug',
  //   title: 'Slug',
  //   validation: Rule => Rule.required()
  // }