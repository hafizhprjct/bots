let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	const sukses = './src/sukses.webp'
 conn.sendFile(m.chat, 'https://saipulanuar.ga/api/bokepig?apikey=VBkM7rbU', 'asupan.mp4', '2023 © Dann-MD', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = false
module.exports = handler