export default {
  name: 'offerType',
  title: 'Offer Type',
  type: 'string',
  options: {
    list: GROUPS(),
  },
}

// A function that generates an array of times from 00:00 to 23:30
export function GROUPS() {
  const groups = ['Self-catering', 'Ownership', 'Touring', 'Events']

  return groups
}