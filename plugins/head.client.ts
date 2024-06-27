export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', (page) => {
    const route = useRoute()
    const title = route.meta.title

    useHead({
      title: title,
    })

    useSeoMeta({
      title: title,
      ogTitle: title
    })
  })
})