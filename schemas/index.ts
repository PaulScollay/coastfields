import region from './region'
import location from './Locations/location'
import address from './CustomObjects/address'
import tagInput from './CustomObjects/tagInput.js'
import generalContent from './CustomObjects/mediaContent'
import durationType from './CustomObjects/Duration/durationType'
import { bedType, bedTypeCount } from './CustomObjects/bedTypes'
import gallery from './CustomObjects/imageGallery'
import timeValue from './CustomObjects/Duration/timeValueType'
import LocationType from './Locations/LocationType'
import locationFeatures from './Locations/locationFeatures'
import LocationTags from './Locations/locationTags'
import content from './content.js'
import attractions from './Attraction/attraction.js'
import slider from './CustomObjects/numberSlider.js'
import locationPagelink from './Locations/locationPageLinks.js'
import venueType from './Venue/venueType.js'
import venue from './Venue/venue.js'
import selfCatering from './Groups/selfCatering/selfCatering.js'
import selfCateringFeatures from './Groups/selfCatering/selfCateringFeatures.js'
import selfCateringUnitType from './Groups/selfCatering/selfCateringUnitTypes.js'
import selfCateringTag from './Groups/selfCatering/selfCateringTags.js'
import touring from './Groups/touring/touring.js'
import touringFeatures from './Groups/touring/touringFeatures.js'
import touringUnitType from './Groups/touring/touringUnitTypes.js'
import touringsuitability from './Groups/touring/touringSuitability.js'
import touringTag from './Groups/touring/touringTags.js'
import searchTags from './Tags/searchTags.js'

//Stock Related Schemas (May move to seperate dataset)
import stock from  './Stock/stock.js'
import stockLocation from './Stock/stockLocation.js'
import stockUnit from './Stock/stockUnit.js'

export const schemaTypes = 
   [region, 
    location,
    address,
    generalContent,
    bedType,
    bedTypeCount,
    LocationType,
    locationPagelink,
    LocationTags,
    content,
    gallery,
    slider,
    locationFeatures,
    attractions,
    venue,
    venueType,
    selfCatering,
    selfCateringUnitType,
    selfCateringFeatures,
    selfCateringTag,
    touring,
    touringFeatures,
    touringUnitType,
    touringsuitability,
    touringTag,
    durationType,
    timeValue,
    searchTags,
    tagInput,
    stock,
    stockLocation,
    stockUnit

]
