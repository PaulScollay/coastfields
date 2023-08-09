export default {
    name: 'imageRightTextLeft',
    type: 'object',
    title: 'imageRightTextLeft',
    initialValue: {
        display: 'Image Right Text Left',
      },
      fieldsets: [
        {
          name: 'imageRightGroup',
          title: 'Select 2 Images',
          options: { columns: 2 },
        },

      ],
    fields: [
    {
        name: 'display',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),

        },

        {
            name: 'text',
            title: 'Image Text',
            type: 'text',
            fieldset: "imageRightGroup",
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            fieldset: "imageRightGroup",
            options: {
                hotspot: true,
            },
        },
    ]
    ,
    options: {
        layout: 'grid',
      },
}