let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let thumb = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
  let dann = `${conn.getName(m.sender)} Sekarang AFK${text ? ': ' + text : ''}`
  conn.sendMessage(m.chat, {
    text: dann,
    contextInfo: {
    externalAdReply: {
    title: namebot,
    body: wm,
    thumbnailUrl: thumb,
    sourceUrl: sig,
    mediaType: 1,
    renderLargerThumbnail: true
    }}})

}
handler.help = ['afk <alasan>']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler