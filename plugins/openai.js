let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let msg = text.trim()
  if (!msg) return m.reply('Ada yang bisa saya bantu?')
  m.reply('Tunggu Sebentar...')
  let res = await fetch(`https://dannteam.com/api/search/chatgpt?q=${text}&apikey=zhirjUircj`)
  let json = await res.json()
  if (json.data) conn.sendMessage(m.chat, {
text: json.data,
contextInfo: {
externalAdReply: {
title: "",
body: wm,
thumbnailUrl: "https://telegra.ph/file/dc5a67d724b016574129b.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
  else throw json
}

handler.help = ['ai <pertanyaan>']
handler.tags = ['internet']
handler.command = /^ai/i

module.exports = handler