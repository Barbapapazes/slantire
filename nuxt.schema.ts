import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    slantire: {
      color: field({
        description: 'The primary color of the site',
        default: 'green',
        type: 'string',
      }),
    }
  }
})
