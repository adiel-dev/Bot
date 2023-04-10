async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*—◉ Aqui Tienes la Lista de SubBots (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝙰ctivos 🤖️*\n\n*◉ Puedes Contactarlos Para Pedir que se Unan a Tus Grupos, ¡Se Respetuoso!*\n\n*◉ Si el Texto Aparece en Blanco, quiere decir que no hay SubBots Activos*\n\n*👤 Netfree - Mx se Deslinda toda Responsabilidad o Suceso Ocurrido Respecto al Bot o SubBots 👤*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
