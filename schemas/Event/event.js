import {defineField} from 'sanity'

export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fieldsets: [
      {
        name: 'contactDetails',
        title: 'Contact Details',
        options: { columns: 2 },
      },
      {
        name: 'sessionTimeLayout',
        title: 'Session Times',
        options: { columns: 2 },
      },
    ],
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required(),
        fieldset: "contactDetails"
      },
      {
        name: 'eventEmail',
        title: 'Email',
        type: 'emailInput',
        fieldset: "contactDetails"
      },
      {
        name: 'eventPhone',
        title: 'Phone',
        type: 'phone',
        fieldset: "contactDetails",
        validation: Rule => Rule.required()
      },
      {
        name: 'capacity',
        type: 'number',
        title: 'Capacity',
        fieldset: "contactDetails",
        validation: Rule => Rule.required()
      },
      {
        title: 'Booking URL',
        name: 'bookingURL',
        type: 'url'
      },
      {
        name: 'eventDate',
        title: 'Event Date',
        description: 'Enter event start and end dates',
        type: 'object',
        validation: Rule => Rule.required(),
        fields: [
          defineField({
            name: 'eventStart',
            type: 'datetime',
          }),
          defineField({
            name: 'eventEnd',
            type: 'datetime',
            validation: Rule => Rule.required().min(Rule.valueOfField('eventStart'))
          }),
        ],
        // make the fields render next to each other
        options: {columns: 2},
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'featuredImage',
        validation: Rule => Rule.required()
      },
      {
        name: 'eventFiles',
        title: 'Files',
        type: 'files',
      },
      {
        title: 'Flash Message',
        name: 'flashMessage',
        type: 'array',
        of: [
          {type: 'block'},
          {
            name: 'flashImage',
            type: 'image',          
          }
        ]
      },
      {
        name: 'gallery',
        type: 'contentGallery',
        title: 'Gallery'
      },
      {
        title: 'Important Information',
        name: 'importantInformation',
        type: 'text',
        rows: 3
      },
      {
        title: 'Is Bookable',
        name: 'isBookable',
        type: 'boolean',
        validation: Rule => Rule.required(),
      },
      {
        name: 'locations',
        text: 'Locations',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'location' },
          },
        ]
      },

      {
        title: 'Open/Close times',
        name: 'openCloseTimes',
        type: 'duration',
      },
      {
        title: 'Prices',
        name: 'prices',
        type: 'table',
        
      },

      {
        name: 'longDescription',
        type: 'text',
        title: 'Long Description',
        rows: 5
      },
      {
        name: 'ShortDescription',
        type: 'text',
        title: 'Short Description',
        rows: 2
      },
      {
        name: 'recurring',
        type: 'date',
        title: 'Recurring'
      },
      {
        title: 'Session Times',
        name: 'sessionTimes',
        type: 'timeValue',
        fieldset: "sessionTimeLayout"
      },
      {
        title: 'Start Time',
        name: 'startTime',
        type: 'timeValue',
        fieldset: "sessionTimeLayout"
      },
      {
        name: 'video',
        type: 'string',
        title: 'Videos (Not Implemented)',

      },
    ]
  }