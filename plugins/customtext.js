let fetch = require('node-fetch') 

let handler = async (m, { conn, text }) => {
    let fla = await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${text}`)
	if (!text) throw 'Masukkan Text!'
	conn.sendFile(m.chat, fla, 'customtext.jpg', wm, m)
  }
  
handler.help = ['buat']
handler.tags = ['main']
handler.command = /^(buat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
module.exports = handler