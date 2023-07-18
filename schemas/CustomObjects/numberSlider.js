export default {
    name: 'slider',
    type: 'object',

    title: 'Example number slider',

    fields: [
        {
            name: 'fieldName',
            type: 'number',

            options: {
                range: {
                    min: 0, // Minimum value
                    max: 100, // Maximum value
                    step: 10 // Slider interval
                }
            }
        }
    ]
}