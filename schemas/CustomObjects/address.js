export default {
    title: 'Address',
    name: 'address',
    type: 'object',
    fieldsets: [
      {
       options: {
         collapsible: true, // Makes the whole fieldset collapsible
         collapsed: true, // Defines if the fieldset should be collapsed by default or not
         //modal: {type: 'popover'} //Makes the modal type a popover
       }
     }
    ],
    fields: [
      {name: 'street', type: 'string', title: 'Street name'},
      {name: 'streetNo', type: 'string', title: 'Street number'},
      {name: 'city', type: 'string', title: 'City'},
      {name: 'postcode', type: 'string', title: 'Postcode'},
      {
        name: 'location',
        type: 'geopoint',
        title: 'Geo Location',  
        description: 'Required, must be in United Kingdom',
        validation: Rule =>
          Rule.required().custom((location) => {
            const { lat, lng } = location
            return lat > 49 && lat < 61 && lng > -10 && lng < 2
              ? true
              : 'Location must be in United Kingdom'
          })
      },
    ]
  }
  
  