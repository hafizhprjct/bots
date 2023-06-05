/*
  * DannTeam
  * ig: @jkt48.danzz
*/

let handler = async (m, { conn }) => {
  // Developer
global.dev = [
  ['6283137550315'],
  ['6283137550315'],
  ['6283137550315', 'DannLonely', 'danigtps@gmail.com', true]
] // Put your number here
  let dann = `Script ini dijual, jika berminat hubungi > @${global.dev[0]}`
  await m.reply(dann)
}

handler.help = ['script', 'sc']
handler.tags = ['info', 'main']
handler.command = /^(sc|script|source(code))$/i

module.exports = handler