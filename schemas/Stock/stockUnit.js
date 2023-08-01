export default {
    name: 'stockUnit',
    type: 'document',
    title: 'Stock Unit',
    fields: [
      {
        name: 'unit',
        type: 'reference',
        to: [{type: 'selfCatering'}]
      },

      {
        name: 'stockNo',
        type: 'string',
        title: 'Stock No'
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
    ]}