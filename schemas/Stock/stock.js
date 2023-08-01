export default {
    name: 'stock',
    type: 'document',
      title: 'Park Unit',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
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