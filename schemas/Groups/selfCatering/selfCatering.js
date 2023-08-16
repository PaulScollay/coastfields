import {defineField, defineType} from 'sanity'

export default {
    name: 'selfCatering',
    type: 'document',
    title: 'Self Catering',
    fieldsets: [
      {
        name: 'threeColumn',
        title: 'Self Catering Options',
        options: { columns: 3 },
      },
      {
        name: 'sleepCapacity',
        title: 'Catering Content',
        options: { columns: 3 },
      },
    ],
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
          name: 'unitType',
          title: 'Self Catering Unit Type',
          type: 'reference',
          to: { type: 'selfCateringUnitType' },
          validation: Rule => Rule.required()
        },
        {
          title: 'Featured',
          name: 'featured',
          type: 'boolean',
          validation: Rule => Rule.required(),
      },
      {
          name: 'featuredImage',
          title: 'Featured Image',
          type: 'image',
          validation: Rule => Rule.required()
      },
      {
        name: 'gallery',
        title: 'Images',
        type: 'array',
        validation: Rule => Rule.required(),
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
        title: 'Floor Plan',
        name: 'floorPlan',
        type: 'image',
      },
      {
        name: 'Features',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'selfCateringFeatures' },
          },
        ],
      },
        {
            title: 'Accessible',
            name: 'accessible',
            type: 'boolean',
            initialValue: false,
            validation: Rule => Rule.required(),
            fieldset: "threeColumn"
        },
        {
            title: 'Active',
            name: 'active',
            type: 'boolean',
            initialValue: true,
            validation: Rule => Rule.required(),
            fieldset: "threeColumn"
        },
        {
          title: 'Car Parking',
          name: 'carParking',
          type: 'boolean',
          initialValue: false,
          validation: Rule => Rule.required(),
          fieldset: "threeColumn"
        },
        {
          title: 'Collection Group',
          name: 'collectionGroup',
          type: 'boolean',
          initialValue: false,
          fieldset: "threeColumn"
        },
        {
            title: 'Electric Car Charging',
            name: 'electricCarCharging',
            type: 'boolean',
            validation: Rule => Rule.required(),
            fieldset: "threeColumn"
        },
        {
            title: 'EP Mapping',
            name: 'epMapping',
            type: 'boolean',
            validation: Rule => Rule.required(),
            fieldset: "threeColumn"
        },
        {
            title: 'Hot Tub',
            name: 'hotTub',
            type: 'boolean',
            validation: Rule => Rule.required(),
            fieldset: "threeColumn"
        },
        {
            title: 'Sleep Capacity',
            name: 'sleepCapacity',
            type: 'number',
            initialValue: 2,
            fieldset: "sleepCapacity",
            validation: Rule => Rule.required(),
            options: {
              list: [1,2,3,4,5,6,7,8,9,10],
            }
        },
        {
            title: 'Bathrooms',
            name: 'bathrooms',
            type: 'number',
            initialValue: 1,
            fieldset: "sleepCapacity",
            validation: Rule => Rule.required(),
            options: {
              list: [1,2,3,4,5,6,7,8,9,10],
            }
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number',
            initialValue: 1,
            fieldset: "sleepCapacity",
            validation: Rule => Rule.required(),
            options: {
              list: [1,2,3,4,5,6,7,8,9,10],
            }
        },
        {
            title: 'Beds',
            name: 'beds',
            type: 'number',
            initialValue: 2,
            fieldset: "sleepCapacity",
            validation: Rule => Rule.required(),
            options: {
              list: [1,2,3,4,5,6,7,8,9,10],
            },
        },
        {
          title: 'Pets',
          name: 'pets',
          type: 'number',
          validation: Rule => Rule.required(),
          options: {
              list: [0,1,2,3,4,5,6,7,8,9,10],
            },
          fieldset: "sleepCapacity",
        },

        {
          name: 'checkInCheckOut',
          type: 'duration',
          title: 'Check In/Out',
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
            name: 'longDescription',
            type: 'text',
            title: 'Long Description',
            validation: Rule => Rule.required(),
          },
          {
            name: 'ShortDescription',
            type: 'text',
            title: 'Short Description',
            validation: Rule => Rule.required(),
          },
          //TODO: SORT BED TYPES
          {
            name: 'bedType',
            text: 'Bed Types',
            type: 'array',
            of: [
              {
                name: 'bedTypeCount2',
                type: 'bedTypeCount',
              },
            ]
          },
          

          {
            title: 'Price',
            name: 'price',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.required(),
          },
          {
            title: 'Reviews',
            name: 'reviews',
            type: 'text',
          },

          {
            title: 'Extras',
            name: 'extras',
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
            title: '3D Tour',
            name: 'tourURL',
            type: 'url'
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



  // options: {
  //   source: 'title',
  //   maxLength: 200, // will be ignored if slugify is set
  //   slugify: input => input
  //                        .toLowerCase()
  //                        .replace(/\s+/g, '-')
  //                        .slice(0, 200)
  // }