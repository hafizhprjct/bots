let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/6303a7615d79c47f0035b.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 085651307830
┃Pulsa: 085651307830 ( Im3 )
┃Pulsa: 081354060278 ( Telkomsel )
┃Gopay: 083137550315
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/HafizhFlash
┃Trakteer: https://trakteer.id/HafizhFlash22
┃Socialbuzz: https://socialbuzz.com/hafizh_flash
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler
