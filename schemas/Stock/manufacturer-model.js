export default {
    name: 'manufacturer-model',
    type: 'document',
    title: 'Model',
    fields: [

        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'manufacturer',
            title: 'Manufacturer',
            type: 'reference',
            to: [{type: 'manufacturer'}]

        },
        {//TYPE IN modEL
            name: 'model_type',
            title: 'Type',
            type: 'reference',
            to: [{type: 'model_type'}]

        },
        {
            name: 'size',
            title: 'Size',
            type: 'reference',
            to: [{type: 'size'}]

        },
        {
            name: 'beds',
            title: 'No of Beds',
            type: 'reference',
            to: [{type: 'beds'}]

        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                title: 'Image',
                name: 'poster',
                type: 'image',
                // validation: (rule) =>
                // rule.custom((value) => {
                //   if (!value) {
                //     return true
                //   }
                  
                //   const filetype = getExtension(value.asset._ref)
            
                //   if (filetype !== 'jpg' && filetype !== 'png') {
                //     return 'Image must be a JPG or PNG'
                //   }
                  
                //   const {width, height} = getImageDimensions(value.asset._ref)
            
                //   if (width < 1200 || height < 630) {
                //     return 'Image must be at least 1200x630 pixels'
                //   }
            
                //   return true
                // }),
                options: {
                hotspot: true // <-- Defaults to false
                },
                fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
                ]
                }
        
              ],

        }
    ]
  }