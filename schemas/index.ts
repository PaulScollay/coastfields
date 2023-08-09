import region from './region'
import location from './Locations/location'
import address from './CustomObjects/address'
import tagInput from './CustomObjects/tagInput.js'
import generalContent from './CustomObjects/mediaContent'
import durationType from './CustomObjects/Duration/durationType'
import year from './Static/year'
import { bedType, bedTypeCount } from './CustomObjects/bedTypes'
import gallery from './CustomObjects/imageGallery'
import timeValue from './CustomObjects/Duration/timeValueType'
import LocationType from './Locations/LocationType'
import locationFeatures from './Locations/locationFeatures'
import LocationTags from './Locations/locationTags'
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
import stockAvailability from  './Stock/stockAvailability.js'
import stockUnit from './Stock/stockUnit.js'
import stockFeatures from './Stock/stockFeatures.js'

//Content
import content from './Content/content'
import twoColImage from './Content/twoColImage'
import threeColImage from './Content/threeColImage'
import fourColImage from './Content/fourColImage'
import columnImageBlock from './Content/columnImageBlock'
import contentGallery from './Content/gallery'
import textImage from './Content/textImageLeftRight'
import fullWidthImage from './Content/fullWidthImage'
import contentTable from './Content/table'
import featuredImage from './Content/featuredImage'
import imageLeftTextRight from './Content/imageLeftTextRight'
import imageRightTextLeft from './Content/imageRightTextLeft'

export const schemaTypes = 
   [region, 
    location,
    address,
    generalContent,
    year,
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
    stockAvailability,
    stockUnit,
    stockFeatures,

    //Content
    columnImageBlock, 
    twoColImage, 
    threeColImage, 
    fourColImage, 
    textImage,
    contentTable,
    contentGallery,
    fullWidthImage,
    featuredImage,
    imageLeftTextRight,
    imageRightTextLeft,
]
