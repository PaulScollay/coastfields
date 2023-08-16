export default {
    name: 'phone',
    title: 'Phone',
    type: 'string',
    validation: Rule => Rule.custom(phone => {
        if (typeof phone === 'undefined') {
            return true // Allow undefined values
        }
        
        return phone.toLowerCase()
            .match(
                /^(?:0|\+?44)(?:\d\s?){9,10}$/
              )
              
            ? true
            : 'This is not a valid uk phone number'
      })
  }