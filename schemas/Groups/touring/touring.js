import {defineField, defineType} from 'sanity'

export default {
    name: 'touring',
    type: 'document',
    title: 'Touring',
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Unit Name',
          validation: Rule => [
            Rule.required().min(5).error('A title of min. 5 characters is required'),
          ]
        },
        {
            title: '3D Tour',
            name: 'tourURL',
            type: 'url'
        },
        {
            title: 'Adults Only',
            name: 'adulstOnly',
            type: 'boolean',
            initialValue: true
        },
        {
            title: 'Active',
            name: 'active',
            type: 'boolean',
            initialValue: true
        },
        {
            title: 'Allow Awnings',
            name: 'allowAwnings',
            type: 'boolean',
            initialValue: true
        },
        {
            title: 'Car Parking',
            name: 'carParking',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'checkInCheckOut',
            type: 'duration',
            title: 'Check In/Out',
         },
        {
            title: 'Collection Group',
            name: 'collectionGroup',
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
            title: 'Electric Hookup',
            name: 'electricHookup',
            type: 'boolean',
            initialValue: false,
        },
        {
            title: 'EP Mapping',
            name: 'epMapping',
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
                to: { type: 'touringFeatures' },
              },
            ],
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
            title: 'Fully Serviced',
            name: 'fullyServiced',
            type: 'boolean',
            initialValue: false,
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
            title: 'Grass',
            name: 'grass',
            type: 'boolean',
            initialValue: false,
         },
          {
            title: 'Guide Price',
            name: 'guidePrice',
            type: 'number',
         },
         {
            title: 'Hard Standing',
            name: 'hardStanding',
            type: 'boolean',
            initialValue: false,
         },
         {
            title: 'Important Information',
            name: 'importantInformation',
            type: 'text',
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
            ],
            validation: Rule => Rule.required()
          },
          {
            name: 'MaxPeople',
            type: 'number',
            title: 'Max People',
            validation: Rule => Rule.required()
          },
          
          {
            title: 'No Of Pitches Available',
            name: 'noOfPitchesAvailable',
            type: 'number',
            validation: Rule => Rule.required()
          },
          {
            name: 'openCloseDate',
            type: 'duration',
            title: 'Open/Close Dates',
         },
          {
            title: 'Pets',
            name: 'pets',
            type: 'number',
            initialValue: 0,
          },
          {
            title: 'Reviews',
            name: 'reviews',
            type: 'text',
          },

          {
            name: 'sitePlan',
            title: 'sitePlan',
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
            name: 'suitability',
            text: 'Suitability',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'touringSuitability' },
              },
            ],
            validation: Rule => Rule.required()
          },

          {
            name: 'unitTypes',
            title: 'Touring Unit Types',
            type: 'reference',
            to: { type: 'touringUnitType' },
            validation: Rule => Rule.required()
          },
          {
            title: 'Zone',
            name: 'zone',
            type: 'text',
          },
          {
            name: 'searchTags',
            text: 'Search Tags',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'touringTag' },
              },
            ]
          },
    ],
    
  }
