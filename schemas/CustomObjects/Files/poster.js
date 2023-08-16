export default {
    name: 'poster',
    type: 'object',
    title: 'Files',
    fields: [
      {
          name: 'display',
          type: 'string',
          title: 'Display as',
          validation: Rule => Rule.required(),

        },
        {
          name: 'posterImage',
          type: 'image',
          title: 'Poster Image'
          
        },
    ],

}