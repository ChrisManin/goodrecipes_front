/**
 * Composable pour toutes les requêtes vers le backend Drupal.
 * Préfixe automatiquement l'URL de base configurée dans .env.
 */
export function useDrupalFetch() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.drupalBaseUrl

  function drupalFetch<T>(path: string, options?: Parameters<typeof $fetch>[1]) {
    return $fetch<T>(`${baseUrl}${path}`, {
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
      ...options,
    })
  }

  return { drupalFetch }
}
