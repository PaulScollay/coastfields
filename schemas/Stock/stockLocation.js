export default {
    name: 'stockLocation',
    type: 'document',
    title: 'Stock Location',
    fields: [
        {
            name: 'locations',
            title: 'locations',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'location' },
              },
            ],
          },
      {
        name: 'stockUnits',
        type: 'number',
        title: "Stock units"
      },
    ]}