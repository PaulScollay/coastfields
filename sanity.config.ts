import {ObjectInputProps, defineConfig, isObjectInputProps} from 'sanity'
import {deskTool} from 'sanity/desk'
import {Stack} from '@sanity/ui'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {Progress} from './schemas/CustomObjects/progressBar/progressBar'
import { table } from '@sanity/table';
import { PlayIcon, EarthGlobeIcon, RocketIcon } from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'Coastfields',

  projectId: 'xd6ol1fh',
  dataset: 'production',

  form: {
    components: {
      input: (props) => {
        if (
          props.id === 'root' &&
          props.schemaType.type?.name === 'document' &&
          props.schemaType.name === 'noSchemaSelected'
        ) {
          return Progress(props as ObjectInputProps)
        }

        return props.renderDefault(props)
      },
    },
  },
  

  plugins: [ 
            table(),
            visionTool(),
            deskTool({
              structure: (S) =>
              
              S.list()
              .title('Menu')
              .items([
                S.listItem()
                .title('Region')
                .icon(EarthGlobeIcon)
                .child(  S.documentList()
                          .title('Regions')
                          .filter('_type == "region"')),
                S.listItem()
                  .title('Location')
                  .icon(RocketIcon)
                  .child( S.list()
                    .id('location1')
                    .title('Location')
                    .items([
                      S.listItem()
                        .id('location1')
                        .title('Locations')
                        .child( S.documentList()
                            .title('Locations')
                            .filter('_type == "location"')),
                      S.listItem()
                        .id('locationTypes')
                        .title('Location Types')
                        .child( S.documentList()
                            .title('Location Types')
                            .filter('_type == "LocationType"')),
                      S.listItem()
                        .id('locationFeatures')
                        .title('Location Features')
                        .child( S.documentList()
                            .title('Location Features')
                            .filter('_type == "locationFeatures"')),
                      S.listItem()
                        .id('locationtag')
                        .title('Location Search Tags')
                        .child( S.documentList()
                            .title('Location Search Tags')
                            .filter('_type == "locationtag"')),
                      ] ),
                  ),
                S.divider(),
                S.listItem()
                  .title('Self Catering')
                  .child( S.list()
                    .title('Self Catering')
                    .id('selfcatering')
                    .items([
                      S.listItem()
                        .id('selfcateringlist')
                        .title('Self Catering Units')
                        .child(  S.documentList()
                            .title('Self Catering Units')
                            .filter('_type == "selfCatering"')),
                      S.listItem()
                        .id('selfcateringfeatures')
                        .title('Self Catering Features')
                        .child( S.documentList()
                            .title('Self Catering Features')
                            .filter('_type == "selfCateringFeatures"')),
                      S.listItem()
                        .id('selfcateringunittypes')
                        .title('Self Catering Unit Types')
                        .child( S.documentList()
                            .title('Location Features')
                            .filter('_type == "selfCateringUnitType"')),
                      S.listItem()
                      .id('selfCateringTag')
                      .title('Self Catering Tags')
                      .child( S.documentList()
                          .title('Self Catering Search Tags')
                          .filter('_type == "selfCateringTag"')),

                      S.listItem()
                      .title('Self Catering By Location')
                      .child(  S.documentTypeList('location')
                                .title('Location')
                                .child(locationId =>
                                  S.documentList()
                                    .title('Self Catering ')
                                    .filter('_type == "selfCatering" && $locationId in locations[]._ref')
                                    .params({ locationId })
                                )
                                )

                    ] ),
                  ),
                S.listItem()
                  .title('Touring')
                  .child( S.list()
                    .id('touring')
                    .title('Touring')                    
                    .items([
                      S.listItem()
                        .id('touringlist')
                        .title('Touring')
                        .child(S.documentList()
                            .title('Touring')
                            .filter('_type == "touring"')),
                      S.listItem()
                        .id('touringFeatures')
                        .title('Touring Features')
                        .child(S.documentList()
                            .title('Touring Features')
                            .filter('_type == "touringFeatures"')),
                      S.listItem()
                        .id('touringUnitType')
                        .title('Touring Unit Types')
                        .child(S.documentList()
                            .title('Touring Unit Types')
                            .filter('_type == "touringUnitType"')),
                      S.listItem()
                        .id('touringSuitability')
                        .title('Touring Suitability')
                        .child(S.documentList()
                            .title('Touring Suitability')
                            .filter('_type == "touringSuitability"')),
                      S.listItem()
                        .id('touringTag')
                        .title('Touring Tags')
                        .child(S.documentList()
                            .title('Touring Tags')
                            .filter('_type == "touringTag"')),
                      ] ),
                  ),
                S.divider(),
                S.listItem()
                  .title('Stock')
                  .child( S.list()
                    .id('stock')
                    .items([
                      S.listItem()
                        .id('stockList')
                        .title('Stock')
                        .child(S.documentList()
                            .title('Stock')
                            .filter('_type == "stock"')),
                      S.listItem()
                      .id('stockFeatures')
                      .title('Stock Features')
                      .child(S.documentList()
                          .title('Stock Features')
                          .filter('_type == "stockFeatures"')),
                      S.listItem()
                      .id('stockAvailability')
                      .title('Stock Availability')
                      .child(S.documentList()
                          .title('Stock Availability')
                          .filter('_type == "stockAvailability"')),
                      S.listItem()
                      .title('Stock By Location')
                      .child(  S.documentTypeList('location')
                                .title('Location')
                                .child(locationId =>
                                  S.documentList()
                                    .title('Stock By Location')
                                    .filter('_type == "stock" && $locationId == locations._ref')
                                    .params({ locationId })
                                )
                                )
                      ] ),
                  ),
                  S.listItem()
                  .title('Venues')
                  .child( S.list()
                    .id('venueslist')
                    .title('Venues')                    
                    .items([
                      S.listItem()
                        .id('venueslistitem')
                        .title('Venues')
                        .child(S.documentList()
                            .title('Venues')
                            .filter('_type == "venue"')),
                      S.listItem()
                        .id('venuetypes')
                        .title('Venue Types')
                        .child(S.documentList()
                            .title('Venue Types')
                            .filter('_type == "venueType"')),
                      ] ),
                  ),
                  S.divider(),
                  S.listItem()
                  .title('Attractions')
                  .child( S.list()
                    .id('attractionList')
                    .title('Attractions')                    
                    .items([
                      S.listItem()
                        .id('attractionList')
                        .title('Attractions')
                        .child(S.documentList()
                            .title('Attraction')
                            .filter('_type == "attraction"')),
                      ] ),
                  ),
                  S.divider(),
                  S.listItem()
                  .title('Content')
                  .child(  S.documentTypeList('content')
                            .title('Content')
                            .filter('_type == "content"')
                            )
                           
                  // .child(
                  //   S.list()
                  //     // Sets a title for our new list
                  //     .title('Location Specific')
                  //     // Add items to the array
                  //     // Each will pull one of our new singletons
                  //     .items([
                  //       S.listItem()
                  //         .title('Locations')
                  //         .child(S.document().schemaType('location').documentId('location')),
                  //       S.listItem()
                  //         .title('Location Type')
                  //         .child(S.document().schemaType('LocationType').documentId('LocationType')),
                  //       S.listItem()
                  //         .title('Location Features')
                  //         .child(S.document().schemaType('locationFeatures').documentId('locationFeatures')),
                  //     ])
                  // ),
                // We also need to remove the new singletons from the main list
                //...S.documentTypeListItems()
                
              ])

            }),
        ],

  schema: {
    types: schemaTypes,
  },
})
