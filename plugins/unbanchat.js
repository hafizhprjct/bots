let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Berhasil unbanned chat!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
