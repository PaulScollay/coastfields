export default {
    name: 'contentGallery',
    type: 'object',
    title: 'Gallery',
    initialValue: {
      title: 'Gallery',
    },
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'imageDisplay',
        type: 'string',
        title: 'Display as',
        description: 'How should we display these images?',
        options: {
          list: [
            { title: 'Carousel', value: 'carousel' , default: true},
            { title: 'Stacked on top of eachother', value: 'stacked' },
            { title: 'In-line', value: 'inline' },
          ],
          layout: 'radio', // <-- defaults to 'dropdown' 
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'zoom',
        type: 'boolean',
        title: 'Zoom enabled',
        description: 'Should we enable zooming of images?',
        default: true
      },
    ],
    // preview: {
    //   select: {
    //     images: 'images',
    //     image: 'images.0',
    //   },
    //   prepare(selection) {
    //     const { images, image } = selection;
  
    //     return {
    //       title: `Gallery block of ${Object.keys(images).length} images`,
    //       subtitle: `Alt text: ${image.alt}`,
    //       media: image,
    //     };
    //   },
    // },
  };