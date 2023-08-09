export default {
    name: 'imageRightTextLeft',
    type: 'object',
    title: 'imageRightTextLeft',
    initialValue: {
        display: 'Image Right Text Left',
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