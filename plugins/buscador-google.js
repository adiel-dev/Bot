import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, '*🔒 Ingrese el Texto o Tema que desee Buscar 🔒*', m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
try {
let ss = await (await fetch(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkeysapi}&url=${url}`)).arrayBuffer()
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
export default handler
