export default {
    name: 'attraction',
    type: 'document',
    title: 'Attraction',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required()
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
        title: 'Website',
        name: 'bookingURL',
        type: 'url'
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        validation: Rule => Rule.required()
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

    ]
  }