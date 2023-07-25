
export default {
    name: 'tagInput',
    type: 'string',
    title: 'Tag',

    validation: Rule => [
        Rule.required().min(10).error('A Tag of min. 10 characters is required'),
        Rule.max(50).warning('50 chars max'),
        Rule.custom(tag => {
        if (typeof tag === 'undefined') {
            return true // Allow undefined values
        }
        return tag.toLowerCase()
            .match(
                /^\S*$/
                ) 
            ? true
            : 'No spaces or special characters allowed'
        })
    ]
 }
    
