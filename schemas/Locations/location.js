export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
          validation: Rule => [
            Rule.required().min(10).error('A title of min. 5 characters is required'),
            Rule.max(50).warning('Shorter location names are usually better')
          ]
        },
        {
            name: 'address',
            title: 'Location Address',
            type: 'address',
            validation: Rule => Rule.required()
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: Rule => Rule.custom(email => {
              if (typeof email === 'undefined') {
                  return true // Allow undefined values
              }
              
              return email.toLowerCase()
                  .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                    
                  ? true
                  : 'This is not a valid email'
            })
        },

        {
          name: 'locationtype',
          title: 'Location Type',
          type: 'reference',
          to: [{type: 'LocationType'}],
          validation: Rule => Rule.required()
         },
         {
          title: 'Booking URL',
          name: 'bookingURL',
          type: 'url'
        },
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
        {
          name: 'faqs',
          title: 'FAQs',
          type: 'content',
      },
      {
          name: 'featuredImage',
          title: 'Featured Image',
          type: 'image',
          validation: Rule => Rule.required()
      },
      {
        name: 'Features',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'locationFeatures' },
          },
        ],
      },
      {
        name: 'logo',
        type: 'array',
        title: 'Logo',
        type: 'image',
      },
      {
        name: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      }, 
      {
        name: 'pageLinks',
        title: 'Page Links',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'locationPagelink' },
          },
        ],
      },
      {
        name: 'description',
        type: 'string',
        title: 'Long Description'
      },
      {
        name: 'Tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'locationtag' },
          },
        ],
      }, 
    ]  
  }