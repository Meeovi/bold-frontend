import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/bold-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}