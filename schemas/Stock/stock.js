import {defineField, defineType} from 'sanity'

export default {
    name: 'stock',
    type: 'document',
    title: 'Stock',
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Unit Name',
          validation: Rule => [
            Rule.required().min(5).error('A title of min. 5 characters is required'),
            Rule.max(30).warning('Shorter location names are usually better')
          ]
        },
        {
            title: '3D Tour',
            name: 'tourURL',
            type: 'url'
        },
        {
            title: 'Accessible',
            name: 'accessible',
            type: 'boolean',
            initialValue: false
        },
        {
            title: 'Active',
            name: 'active',
            type: 'boolean',
            initialValue: true
        },
        {
            title: 'Sleep Capacity',
            name: 'sleepCapacity',
            type: 'number',
            initialValue: 2,
            options: {
              list: [1,2,3,4,5,6,7,8],
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Bathrooms',
            name: 'bathrooms',
            type: 'number',
            initialValue: 1,
            options: {
              list: [1,2,3],
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number',
            initialValue: 1,
            options: {
              list: [1,2,3,4,5],
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Beds',
            name: 'noOfBed',
            type: 'number',
            initialValue: 1,
            options: {
              list: [1,2,3,4,5],
            },
            validation: Rule => Rule.required()
        },
        {
          name: 'availability',
          title: 'Availability',
          type: 'reference',
          to: [{type: 'stockAvailability'}]
        },
        {
            title: 'Car Parking',
            name: 'carParking',
            type: 'boolean',
            initialValue: false,
        },
        {
            title: 'Electric Car Charging',
            name: 'electricCarCharging',
            type: 'boolean',
            initialValue: false,
        },
        {
            title: 'Hot Tub',
            name: 'hotTub',
            type: 'boolean',
            initialValue: false,
        },
        {
            title: 'Extras',
            name: 'extras',
            type: 'text',
        },
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
            initialValue: true,
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
                to: { type: 'stockFeatures' },
              },
            ],
          },
          {
            title: 'Finance Deposit',
            name: 'financeDeposit',
            type: 'text',
          },
          {
            title: 'Finance Term',
            name: 'financeTerm',
            type: 'text',
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
            title: 'Floor Plan',
            name: 'floorPlan',
            type: 'image',
          },

          {
            name: 'gallery',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'image',
              }
            ],
            options: {
              layout: 'grid',
            },
          }, 
          {
            title: 'Guide Price',
            name: 'guidePrice',
            type: 'number',
          },
          {
            title: 'Retail Price',
            name: 'retailPrice',
            type: 'number',
          },
          {
            title: 'POA Price On Application',
            name: 'priceOnApplication',
            type: 'boolean',
            initialValue: true,
          },
          {
            name: 'locations',
            text: 'Locations',
            type: 'reference',
            to: [{type: 'location'}]
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
            title: 'Size',
            name: 'size',
            type: 'text',
          },
          {
            name: 'stockSKU',
            title: 'SKU',
            type: 'array',
            of: [
              {
                type: 'string',
              }
            ],
            options: {
              layout: 'grid',
            },
          }, 
          {
            title: 'Price',
            name: 'price',
            type: 'number',
            initialValue: 0,
          },
          {
            name: 'unitType',
            title: 'Self Catering Unit Type',
            type: 'reference',
            to: { type: 'selfCateringUnitType' },
            validation: Rule => Rule.required()
          },
          {
            title: 'Was Price',
            name: 'wasPrice',
            type: 'number',
            initialValue: 0,
          },
          {
            title: 'Width',
            name: 'width',
            type: 'number',
            initialValue: 10,
          },
          {
            title: 'Year',
            name: 'yearInService',
            type: 'year',
          },
          {
            name: 'searchTags',
            text: 'Search Tags',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'selfCateringTag' },
              },
            ]
          },
    ],
    
  }

