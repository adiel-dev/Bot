/*By https://github.com/netfreemx-dev/ */
import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
try {  
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
if (!text) throw `*🔒 Ingrese el Nombre del Paquete que desea Buscar 🔒*`
let json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
let res = jsons.result.map((v, index) => `*📲 Resultado:* ${1 + index}\n*🌵 Nombre:* ${v.title}\n*🍂 Url:* ${v.url}`).join`\n\n┄1�7┄1�7┄1�7\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*🔒 Por Favor Vuelva a Intentarlo 🔒*')}}
handler.tags = ['sticker', 'search']
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
