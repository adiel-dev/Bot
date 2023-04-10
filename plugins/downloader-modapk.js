let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*🔒 Ingrese el Nombre de la apk que desea Buscar🔒*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*🔒 No fue Posible encontrar resultados de la Apk 🔒*' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: '📍Selecciona el Mod a Descargar📍', rows: srh}]
const listMessage = {text: `┌───[Netfree mx]\n│\n│- 📟 Resultados de: ${text}\n│\n└─────────────────◉`, footer: wm, title: null, buttonText: "Selecciona aquí", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*🔒 Ingrese el link de una Apk, Ejemplo: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*🔒 El Archivo es demasiado Pesado 🔒*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*🔒 El Archivo es demasiado Pesado 🔒*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `*🔒 No se encontró Ningun Mod con ese Nombre*`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
