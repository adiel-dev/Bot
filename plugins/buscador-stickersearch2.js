/* Created By https://github.com/netfreemx-dev */
import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[鉂梋 饾櫢饾櫧饾櫠饾殎饾櫞饾殏饾櫞 饾櫞饾櫥 饾櫧饾櫨饾櫦饾櫛饾殎饾櫞 饾櫝饾櫞饾櫥 饾櫩饾櫚饾殌饾殑饾櫞饾殐饾櫞 饾殌饾殑饾櫞 饾櫝饾櫞饾殏饾櫞饾櫞 饾櫛饾殑饾殏饾櫜饾櫚饾殎*`
try {
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`)
let jsons = await json.json()
let { stickers } = jsons.result[0]
let res = jsons.result.map((v, index) => `馃寘 鈥� Resultado: ${1 + index}\n*馃 鈥� Nombre:* ${v.title}\n*馃悽 鈥� Autor:* ${v.author}\n*馃崅 鈥� Url:* ${v.url}`).join`\n\n鈹�鈹�鈹�\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[鉂梋 饾櫞饾殎饾殎饾櫨饾殎, 饾櫩饾櫨饾殎 饾櫟饾櫚饾殔饾櫨饾殎 饾殔饾殑饾櫞饾櫥饾殔饾櫚 饾櫚 饾櫢饾櫧饾殐饾櫞饾殎饾櫧饾殐饾櫚饾殎饾櫥饾櫨*')}}
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2']
export default handler
