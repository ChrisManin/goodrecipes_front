export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const path = getRouterParam(event, 'path')
  const query = getQuery(event)

  return $fetch(`${config.public.drupalBaseUrl}/${path}`, {
    query,
    headers: { Accept: 'application/json' },
  })
})
