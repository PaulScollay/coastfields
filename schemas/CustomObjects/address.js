export default {
    title: 'Address',
    name: 'address',
    type: 'object',
    fieldsets: [
      {
      name: 'addressLayout',
      title: 'Details',
       options: {
         collapsible: false, // Makes the whole fieldset collapsible
         collapsed: false, // Defines if the fieldset should be collapsed by default or not
         columns: 3 
         //modal: {type: 'popover'} //Makes the modal type a popover
       }
     },
      {
      name: 'geoLayout',
      title: 'GEO Location',
       options: {
         collapsible: true, // Makes the whole fieldset collapsible
         collapsed: true, // Defines if the fieldset should be collapsed by default or not
         columns: 1,
         modal: {type: 'popover'} //Makes the modal type a popover
       }
     }
    ],
    fields: [
      {name: 'address', type: 'string', title: 'Address'},
      {name: 'city', type: 'string', title: 'City', fieldset: "addressLayout", validation : Rule => Rule.required()},
      {name: 'county', type: 'string', title: 'County', fieldset: "addressLayout", validation : Rule => Rule.required()},
      {name: 'postcode', type: 'string', title: 'Postcode', fieldset: "addressLayout", validation : Rule => Rule.required()},
      {
        name: 'location',
        type: 'geopoint',
        title: 'Geo Location',  
        fieldset: "geoLayout",
        description: 'Required, Location must be in United Kingdom (UK lat > 49 && lat < 61 && lng > -10 && lng < 2',
        //TODO: Add validation if require for GEO
        // validation: Rule =>
        //   Rule.required().custom((location) => {
        //     const { lat, lng } = location
        //     return lat > 49 && lat < 61 && lng > -10 && lng < 2
        //       ? true
        //       : 'Location must be in United Kingdom (UK lat > 49 && lat < 61 && lng > -10 && lng < 2)'
        //   })
      },
    ]
  }
  
  