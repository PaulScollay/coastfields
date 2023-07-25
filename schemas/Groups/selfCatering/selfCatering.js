import {defineField, defineType} from 'sanity'

export default {
    name: 'selfCatering',
    type: 'document',
    title: 'Self Catering',
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
            validation: Rule => Rule.required()
        },
        {
            title: 'Bathrooms',
            name: 'bathrooms',
            type: 'number',
            initialValue: 1,
            validation: Rule => Rule.required()
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number',
            initialValue: 1,
            validation: Rule => Rule.required()
        },
        {
            title: 'Beds',
            name: 'beds',
            type: 'number',
            initialValue: 2,
            validation: Rule => Rule.required()
        },
        {
            title: 'Car Parking',
            name: 'carParking',
            type: 'boolean',
            initialValue: false,
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
            title: 'EP Mapping',
            name: 'epMapping',
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
                to: { type: 'selfCateringFeatures' },
              },
            ],
          },
          {
            title: 'Flash Message',
            name: 'flashMessage',
            type: 'text',
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
          //TODO: Replace Images (above) with Gallery (below)
          // {
          //   title: 'Gallery',
          //   name: 'selfCateringGallery',
          //   type: 'gallery',
          // },

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
            title: 'Long Description'
          },
          {
            name: 'ShortDescription',
            type: 'text',
            title: 'Short Description'
          },
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
            title: 'Pets',
            name: 'pets',
            type: 'number',
            options: {
                list: [0,1,2,3,4,5,6,7,8,9,10],
              },
          },
          {
            title: 'Price',
            name: 'price',
            type: 'number',
            initialValue: 0,
          },
          {
            title: 'Reviews',
            name: 'reviews',
            type: 'text',
          },
          {
            name: 'unitTypes',
            title: 'Self Catering Unit Types',
            type: 'reference',
            to: { type: 'selfCateringUnitType' },
            validation: Rule => Rule.required()
          },
          {
            name: 'searchTags',
            text: 'Search Tags',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'selfcateringtag' },
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