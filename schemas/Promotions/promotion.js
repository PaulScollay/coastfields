import {defineField} from 'sanity'

export default {
    name: 'promotion',
    type: 'document',
    title: 'Promotions',
    fieldsets: [
      {
        name: 'contactDetails',
        title: 'Contact Details',
        options: { columns: 2 },
      },
      {
        name: 'promoTags',
        title: 'Tags',
        options: { columns: 2 },
        validation: Rule => Rule.required(),
      },
    ],
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required(),
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
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'featuredImage',
        validation: Rule => Rule.required()
      },
      {
        name: 'offerType',
        title: 'Offer Type',
        type: 'offerType',
         },
      {
        name: 'tandc',
        title: 'Terms and Conditions',
        type: 'array',
        name: 'contentBlock',
        of: [
          {type: 'block'},
        ]
      },

      {
        title: 'Adults Only',
        name: 'adultsOnly',
        type: 'boolean',
        validation: Rule => Rule.required(),
        fieldset: "promoTags"
      },
      {
        title: 'Country',
        name: 'country',
        type: 'boolean',
        validation: Rule => Rule.required(),
        fieldset: "promoTags"
      },
      {
        title: 'Coastal',
        name: 'coastal',
        type: 'boolean',
        validation: Rule => Rule.required(),
        fieldset: "promoTags"
      },
      {
        title: 'Ents',
        name: 'ents',
        type: 'boolean',
        validation: Rule => Rule.required(),
        fieldset: "promoTags"
      },
      {
        name: 'promoDate',
        title: 'Promotion Dates',
        description: 'Enter promotion start and end dates',
        type: 'object',
        validation: Rule => Rule.required(),
        fields: [
          defineField({
            name: 'promoStart',
            type: 'datetime',
          }),
          defineField({
            name: 'promoEnd',
            type: 'datetime',
            validation: Rule => Rule.required().min(Rule.valueOfField('promoStart'))
          }),
        ],
        // make the fields render next to each other
        options: {columns: 2},
      },
      {
        title: 'How to Apply',
        name: 'howToApply',
        type: 'array',
        of: [
          {type: 'block'},
          {
            name: 'Images',
            type: 'image',          
          }
        ]
      },
      {
        title: 'Promo Code',
        name: 'promoCode',
        type: 'string',
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
        name: 'linkEvent',
        text: 'Linked Event',
        type: 'reference',
        to: { type: 'event' },
      },


    ]
  }