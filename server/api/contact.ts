export default defineEventHandler(async (event) => {
  const { BOT_TOKEN, CHAT_ID } = useRuntimeConfig(event)
  const { text } = await readBody(event)

  try {
    await $fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown'
      }
    })
  } catch (error) { return { error } }
})