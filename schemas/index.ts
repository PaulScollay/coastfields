// import park from './park'
import model_type from './type'
import manufacturer from './z-Depricated/manufacturer'
import manufacturerModel from './z-Depricated/manufacturer-model'
// import park_unit from './Depricated/park-unit'
import region from './region'
import size from './size'
import location from './Locations/location'
import address from './CustomObjects/address'
import tagInput from './CustomObjects/tag.js'
import generalContent from './CustomObjects/mediaContent'
import durationType from './CustomObjects/Duration/durationType'
import { bedType, bedTypeCount } from './CustomObjects/bedTypes'
import gallery from './CustomObjects/imageGallery'
import timeValue from './CustomObjects/Duration/timeValueType'
import LocationType from './Locations/LocationType'
import locationFeatures from './Locations/locationFeatures'
import LocationTags from './Locations/locationTags'
import content from './content.js'
import attractions from './attractions.js'
import slider from './CustomObjects/numberSlider.js'
import locationPagelink from './Locations/locationPageLinks.js'
import venueType from './Venue/venueType.js'
import venue from './Venue/venue.js'
import selfCatering from './Groups/selfCatering/selfCatering.js'
import selfCateringFeatures from './Groups/selfCatering/selfCateringFeatures.js'
import selfCateringUnitType from './Groups/selfCatering/selfCateringUnitTypes.js'
import selfcateringtag from './Groups/selfCatering/selfCateringTags.js'
import touring from './Groups/touring/touring.js'
import touringFeatures from './Groups/touring/touringFeatures.js'
import touringUnitType from './Groups/touring/touringUnitTypes.js'
import touringsuitability from './Groups/touring/touringSuitability.js'
import touringtag from './Groups/touring/touringTags.js'
import searchTags from './Tags/searchTags.js'
import inc_description_list from './whats-included'


export const schemaTypes = 
   [region, 
    // park, 
    model_type,
    // manufacturer,
    // manufacturerModel,
    //park_unit,
    size,
    // inc_description_list,
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
    selfcateringtag,
    touring,
    touringFeatures,
    touringUnitType,
    touringsuitability,
    touringtag,
    durationType,
    timeValue,
    searchTags,
    tagInput

]
