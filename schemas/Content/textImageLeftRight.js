export default {
    name: 'textImageLeftRight',
    type: 'object',
    title: 'textImage',
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
        {
        name: 'align',
        type: 'string',
        title: 'Display as',
        options: {
            list: [
            { title: 'Image on left', value: 'Image-On-Left' },
            { title: 'Image on right', value: 'Image-On-Right' },
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