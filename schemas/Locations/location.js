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
            Rule.required().min(5).error('A title of min. 5 characters is required'),
            Rule.max(30).warning('Shorter location names are usually better')
          ]
        },
        {
            name: 'address',
            title: 'Location Address',
            type: 'address',
            validation: Rule => Rule.required()
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: Rule => Rule.custom(phone => {
              if (typeof phone === 'undefined') {
                  return true // Allow undefined values
              }
              
              return phone.toLowerCase()
                  .match(
                      /^(?:0|\+?44)(?:\d\s?){9,10}$/
                    )
                    
                  ? true
                  : 'This is not a valid uk phone number'
            })
        },
        {
          name: 'longDescription',
          type: 'text',
          title: 'Long Description'
        },
        {
          name: 'ShortDescription',
          type: 'text',
          title: 'Short Description'
        },
        {
          title: 'Date Opens',
          name: 'startDate',
          type: 'date',
          // validation: Rule => Rule.required().min((new Date())),
          initialValue: () => ({
            isHighlighted: false,
            releaseDate: (new Date()).toISOString()
          })
        },
        {
          title: 'Date Closes',
          name: 'endDate',
          type: 'date',
          validation: Rule => Rule.required().min(Rule.valueOfField('startDate'))
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
          name: 'locationType',
          title: 'Location Type',
          type: 'reference',
          to: [{type: 'LocationType'}],
          validation: Rule => Rule.required()
         },
         {
          name: 'venus',
          title: 'Venues',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: { type: 'venue' },
            },
          ],
        },
         {
          title: 'Booking URL',
          name: 'bookingURL',
          type: 'url'
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
        name: 'Files',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      }, 
      {
        name: 'Images',
        title: 'Images',
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

  // initialValue: {
  //   tel: 122334554565,
  //   geo: {
  //     _type: 'geopoint',
  //     lat: 1,
  //     lng: 2
  //   }
  // },