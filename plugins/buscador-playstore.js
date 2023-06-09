import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*馃敀 Ingrese el Nombre de la Apk que desee Buscar 馃敀*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`馃攳 Resultado: ${gPlay.titulo}
馃К Identificador: ${gPlay.id}
鉀擄笍 Link: ${gPlay.link}
馃柤锔� Imagen: ${gPlay.imagen}
鉁嶏笍 Desarrollador: ${gPlay.desarrollador}
馃摐 Descripcion: ${mystic.text}
馃挷 Moneda: ${gPlay.moneda}
馃幁 Gratis?: ${gPlay.gratis}
馃捀 Precio: ${gPlay.precio}
馃搱 Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*馃敀 Por Favor Vuelva a Intentarlo 馃敀*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
