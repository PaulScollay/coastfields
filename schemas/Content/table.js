export default
    {
        name: 'contentTable',
        title: 'Table',
        type: 'document',
        fields: [
            {
                name: 'display',
                type: 'string',
                title: 'Display as',
                validation: Rule => Rule.required(),
            },
            {
            
            // Include the table as a field
            // Giving it a semantic title
            name: 'tableData',
            title: 'Tabel Data',
            type: 'table',
            },
        ],
 }