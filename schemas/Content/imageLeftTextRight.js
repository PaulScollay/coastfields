export default {
    name: 'imageLeftTextRight',
    type: 'object',
    title: 'imageLeftTextRight',
    initialValue: {
        display: 'Image Left Text Right',
      },
      fieldsets: [
        {
          name: 'imageLeftGroup',
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
        name: 'image',
        type: 'image',
        title: 'Image',
        fieldset: "imageLeftGroup",
        options: {
            hotspot: true,
        },
        },
        {
        name: 'text',
        title: 'Image Text',
        type: 'text',
        fieldset: "imageLeftGroup"
        },
    ]
    ,
    options: {
        layout: 'grid',
      },
}