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
                .child( categoryId =>
                        S.documentList()
                          .title('Regions')
                          .filter('_type == "region"')),
                S.listItem()
                  .title('Location')
                  .child( S.list()
                    .id('location1')
                    .items([
                      S.listItem()
                        .id('location1')
                        .title('Locations')
                        .child(categoryId =>
                          S.documentList()
                            .title('Locations')
                            .filter('_type == "location"')),
                      S.listItem()
                        .id('locationTypes')
                        .title('Location Types')
                        .child(categoryId =>
                          S.documentList()
                            .title('Location Types')
                            .filter('_type == "LocationType"')),
                      S.listItem()
                        .id('locationFeatures')
                        .title('Location Features')
                        .child(categoryId =>
                          S.documentList()
                            .title('Location Features')
                            .filter('_type == "locationFeatures"')),
                      S.listItem()
                        .id('locationtag')
                        .title('Location Tags')
                        .child(categoryId =>
                          S.documentList()
                            .title('Location Tags')
                            .filter('_type == "locationtag"')),
                      ] ),
                  ),
                S.listItem()
                  .title('Self Catering')
                  .child( S.list()
                    .id('selfcatering')
                    .items([
                      S.listItem()
                        .id('selfcateringlist')
                        .title('Self Catering Units')
                        .child(categoryId =>
                          S.documentList()
                            .title('Self Catering Units')
                            .filter('_type == "selfCatering"')),
                      S.listItem()
                        .id('selfcateringfeatures')
                        .title('Self Catering Features')
                        .child(categoryId =>
                          S.documentList()
                            .title('Self Catering Features')
                            .filter('_type == "selfCateringFeatures"')),
                      S.listItem()
                        .id('selfcateringunittypes')
                        .title('Self Catering Unit Types')
                        .child(categoryId =>
                          S.documentList()
                            .title('Location Features')
                            .filter('_type == "selfCateringUnitType"')),
                      ] ),
                  ),
                S.listItem()
                  .title('Touring')
                  .child( S.list()
                    .id('touring')
                    .items([
                      S.listItem()
                        .id('touringlist')
                        .title('Touring')
                        .child(categoryId =>
                          S.documentList()
                            .title('Self Catering')
                            .filter('_type == "selfCatering"')),
                      S.listItem()
                        .id('selfcateringfeatures')
                        .title('Touring Features')
                        .child(categoryId =>
                          S.documentList()
                            .title('Touring Features')
                            .filter('_type == "selfCateringFeatures"')),
                      S.listItem()
                        .id('selfcateringunittypes')
                        .title('Touring Unit Types')
                        .child(categoryId =>
                          S.documentList()
                            .title('Location Features')
                            .filter('_type == "selfCateringUnitType"')),
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
