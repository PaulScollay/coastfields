import {defineField, defineType} from 'sanity'

export default {
  name: 'duration',
  title: 'Duration',
  description: 'Enter check in and check out times',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      type: 'timeValue',
    }),
    defineField({
      name: 'end',
      type: 'timeValue',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
}