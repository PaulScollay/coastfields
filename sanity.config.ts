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
                  .title('Location Details')
                  .child( S.list()
                    .id('location1')
                    .items([
                      S.listItem()
                        .id('location1')
                        .title('Locations')
                        .child(categoryId =>
                          S.documentList()
                            .title('Locations')
                            .filter('_type == "location"'))
                      ] ),
                  ),
                S.listItem()
                  .title('Self Catering')
                  .child(categoryId =>
                    S.documentList()
                      .title('Self Catering')
                      .filter('_type == "selfCatering"')
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
