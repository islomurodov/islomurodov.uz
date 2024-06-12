export default defineEventHandler(async (event) => {
  const { BOT_TOKEN, CHAT_ID } = useRuntimeConfig(event)
  const { text } = getQuery(event)

  try {
    const data = await $fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown'
      }
    })

    return data
  } catch (error) { return { error } }
})