export default {
    name: 'park_unit_qry',
    type: 'document',
      title: 'Park Unit Qry',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      // {
      //   name: 'parent',
      //   type: 'reference',
      //   to: [
      //     {
      //       type: 'park' // or whatever your document name is
      //     }
      //   ]
      // },
      {
        name: 'stockNo',
        type: 'string',
        title: 'Stock No'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'parkasset',
        title: 'Manufactuer Model',
        type: 'reference',
        to: [{type: 'manufacturer-model'}]

    },
    {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
    {
        name: 'preowned',
        type: 'boolean',
        title: 'Preowned'
      },
    {
        name: 'justarrived',
        type: 'boolean',
        title: 'Just Arrived'
      },
      
      {
        name: 'included',
        title: 'What\'s Included',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'inc_description_list' },
          },
        ],
    }
    ],
    initialValue: {
        justarrived: false,
        preowned: false,
      }
}