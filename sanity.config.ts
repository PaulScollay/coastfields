import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Coastfields',

  projectId: 'xd6ol1fh',
  dataset: 'production',

  plugins: [ 
            visionTool(),
            deskTool({
              structure: (S) =>
              
              S.list()
              .title('Menu')
              .items([
                S.listItem()
                .title('Region')
                .child(  S.documentList()
                          .title('Regions')
                          .filter('_type == "region"')),
                S.listItem()
                  .title('Location')
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
                      .id('selfcateringtag')
                      .title('Self Catering Tags')
                      .child( S.documentList()
                          .title('Self Catering Search Tags')
                          .filter('_type == "selfcateringtag"')),
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
                            .filter('_type == "touringtag"')),
                      ] ),
                  ),
                S.listItem()
                  .title('Owners')
                  .child( S.list()
                    .id('owners')
                    .items([
                      S.listItem()
                        .id('ownerslist')
                        .title('Owners')
                        .child(S.documentList()
                            .title('Owners')
                            .filter('_type == "selfCatering"')),
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
