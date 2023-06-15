export default {
    name: 'park',
    type: 'document',
      title: 'Park',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },

      {
        name: 'park_unit',
        title: 'Park Unit',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'park_unit' },
          },
        ],
      },
      // {
      //   name: 'park_unit',
      //   title: 'Park Unit',
      //   type: 'array',
      //   of: [
      //     {
      //       type: 'park_unit' ,
      //     },
      //   ],
      // },


    ]
  }