let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://dannteam.com/api/maker/jadianime?url=${url}&apikey=zhirjUircj`)).buffer()
await conn.sendFile(m.chat, hasil, '', `${global.wm}`, m)
	
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(jadianime)$/i
handler.limit = true

module.exports = handler