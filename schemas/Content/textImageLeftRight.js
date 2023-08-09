export default {
    name: 'textImageLeftRight',
    type: 'object',
    title: 'textImage',
    fields: [
    {
        name: 'display',
        type: 'string',
        title: 'Display as',
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
        {
        name: 'align',
        type: 'string',
        title: 'Display as',
        options: {
            list: [
            { title: 'Image on left', value: 'imageOnLeft' },
            { title: 'Image on right', value: 'imageOnRight' },
            ],
            layout: 'radio', // <-- defaults to 'dropdown'
        },
        validation: Rule => Rule.required(),
    }
    ]
    ,
    options: {
        layout: 'grid',
      },
}