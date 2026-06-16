import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
   interface ContentCollectionItem extends PageCollectionItemBase {}
  

  interface PageCollections {
    content: ContentCollectionItem
  }

  interface Collections {
    content: ContentCollectionItem
  }
}
