export default {
  name: 'locationtag',
  type: 'document',
  title: 'Location Search Tags',
  fields: [
    {
      name: 'contentTitle',
      type: 'string',
      title: 'Tag Title',
      validation: Rule => Rule.required()
    },
    {
      title: 'Handleized name (Slug)',
      name: 'handle',
      type: 'slug',
      options: {
        source: 'contentTitle',
        disableArrayWarning: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ]
}