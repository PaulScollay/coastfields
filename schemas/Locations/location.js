export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fieldsets: [
      {
        name: 'contactDetails',
        title: 'Contact Details',
        options: { columns: 2 },
      },
      {
        name: 'openingDates',
        title: 'Park Opening Dates',
        options: { columns: 2 },
      },
    ],
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
          name: 'email',
          title: 'Email',
          type: 'emailInput',
          fieldset: "contactDetails",
          validation : Rule => Rule.required()
        },
        {
          name: 'locationPhone',
          title: 'Phone',
          type: 'string',
          fieldset: "contactDetails",
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
            name: 'address',
            title: 'Location Address',
            type: 'address',
            validation: Rule => Rule.required()
        },
        {
          name: 'locationType',
          title: 'Location Type',
          type: 'reference',
          to: [{type: 'LocationType'}],
          validation: Rule => Rule.required()
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
          title: 'Opens',
          name: 'startDate',
          type: 'date',
          fieldset: "openingDates",
          initialValue: () => ({
            isHighlighted: false,
            releaseDate: (new Date()).toISOString()
          })
        },
        {
          title: 'Closes',
          name: 'endDate',
          type: 'date',
          fieldset: "openingDates",
          validation: Rule => Rule.required().min(Rule.valueOfField('startDate'))
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
          options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: true, // Defines if the fieldset should be collapsed by default or not
            columns: 1,
          },
          type: 'content',
      },
      {
          name: 'featuredImage',
          title: 'Featured Image',
          type: 'featuredImage',
          validation: Rule => Rule.required()
      },
      {
        name: 'Gallery',
        title: 'Gallery',
        type: 'contentGallery',
      }, 
      {
        name: 'logo',
        type: 'array',
        title: 'Logo',
        type: 'image',
      },
      {
        name: 'Files',
        type: 'files',
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