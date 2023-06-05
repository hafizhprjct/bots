let fetch = require('node-fetch')
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw 'Ada yang bisa saya bantu?'
let dann = await fetch(`https://dannteam.com/api/search/chatgpt?q=${text}&apikey=zhirjUircj`)
let hasil = await dann.json()
 m.reply(`${hasil.data}`.trim())
    }  
handler.help = ['ai2', 'aiturbo']
handler.tags = ['internet','tools']
handler.command = /^ai(turbo|2)$/i
module.exports = handler