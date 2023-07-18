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
          name: 'description',
          type: 'string',
          title: 'Long Description'
        },
        {
          title: 'Date Opens',
          name: 'startDate',
          type: 'date',
          validation: Rule => Rule.required().min((new Date())),
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