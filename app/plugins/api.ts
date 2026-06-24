import { BlocksModule } from '~/repository/modules/blocks'

export interface IApiInstance {
  blocks: BlocksModule
}

declare module '#app' {
  interface NuxtApp {
    $api: IApiInstance
    $apiFetch: typeof $fetch
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const apiFetch = $fetch.create({
    baseURL: import.meta.server
      ? config.public.drupalBaseUrl  // SSR : appel direct serveur → serveur, pas de CORS
      : '/api/drupal',               // Client : via proxy Nitro, même origine
    headers: {
      Accept: 'application/json',
    },
    query: {
      _format: 'json',
    },
    onRequestError({ response }: any) {
      if (import.meta.server && response?.status >= 400) {
        console.error(`[API] ${response.status} — ${response.url}`)
      }
    },
  })

  const repositories: IApiInstance = {
    blocks: new BlocksModule(apiFetch),
  }

  return {
    provide: {
      api: repositories,
      apiFetch,
    },
  }
})
