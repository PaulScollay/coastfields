export default {
    name: 'imageLeftTextRight',
    type: 'object',
    title: 'imageLeftTextRight',
    initialValue: {
        display: 'Image Left Text Right',
      },
    fields: [
    {
        name: 'display',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),

        },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
            hotspot: true,
        },
        },
        {
        name: 'text',
        title: 'Image Text',
        type: 'text'
        },
    ]
    ,
    options: {
        layout: 'grid',
      },
}