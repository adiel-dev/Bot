import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['17059900962', '馃憫 NetFree - Creador 馃憫', true],
  ['593968585283'],
  ['5219993404349'],
  ['5219991402134'],	
  ['5219996125657']
] 

global.suittag = ['5219993404349'] 
global.prems = ['51995386439'] 

global.packname = '(鈽烇緹鈭�锞�)鈽�'
global.author = '鈽匩etFre Mx - Bot鈽�'
global.wm = '鈽匩etFree Mx - Bot鈽�'
global.igfg = '鈽匩etFree Mx - Bot鈽�'
global.wait = '*[鉂梋 茋岽�蕗散岽�纱岽呩磸, 岽�散岽溼磤蕗岽呩磭 岽溕� 岽嶀磸岽嶀磭纱岽涐磸...*'

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
      level: '馃К Nivel',
      limit: '馃拵 Diamante',
      exp: '鈿� Experiencia',
      bank: '馃彟 Banco',
      diamond: '馃拵 Diamante',
      health: '鉂わ笍 Salud',
      kyubi: '馃寑 Magia',
      joincount: '馃獧 Token',
      emerald: '馃挌 Esmeralda',
      stamina: '鉁� Energ铆a',
      role: '馃挭 Rango',
      premium: '馃師锔� Premium',
      pointxp: '馃摟 Puntos Exp',
      gold: '馃憫 Oro',
      trash: '馃棏 Basura',
      crystal: '馃敭 Cristal',
      intelligence: '馃 Inteligencia',
      string: '馃暩锔� Cuerda',
      keygold: '馃攽 Llave de Oro',
      keyiron: '馃棟锔� Llave de Hierro',
      emas: '馃獏 Pi帽ata',
      fishingrod: '馃帲 Ca帽a de Pescar',
      gems: '馃崁 Gemas',
      magicwand: '鈿曪笍 Varita M谩gica',
      mana: '馃獎 Hechizo',
      agility: '馃じ鈥嶁檪锔� Agilidad',
      darkcrystal: '鈾狅笍 Cristal Oscuro',
      iron: '鉀擄笍 Hierro',
      rock: '馃 Roca',
      potion: '馃イ Poci贸n',
      superior: '馃捈 Superior',
      robo: '馃殧 Robo',
      upgrader: '馃О Aumentar Mejora',
      wood: '馃 Madera',
      strength: '馃鈥� 鈾�锔� Fuerza',
      arc: '馃徆 Arco',
      armor: '馃ゼ Armadura',
      bow: '馃徆 Super Arco',
      pickaxe: '鉀忥笍 Pico',
      sword: '鈿旓笍 Espada',
      common: '馃摝 Caja Com煤n',
      uncoommon: '馃ァ Caja Poco Com煤n',
      mythic: '馃棾锔� Caja M铆tico',
      legendary: '馃巵 Caja Legendaria',
      petFood: '馃崠 Alimento para Mascota',
      pet: '馃嵄 Caja para Mascota',
      bibitanggur: '馃崌 Semilla de Uva',
      bibitapel: '馃崕 Semilla de Manzana',
      bibitjeruk: '馃崐 Semillas de naranja',
      bibitmangga: '馃キ Semilla de Mango',
      bibitpisang: '馃崒 Semillas de Pl谩tano',
      ayam: '馃悡 Pollo',
      babi: '馃悥 Puerco',
      Jabali: '馃悧 Jabali',
      bull: '馃悆 Toro',    
      buaya: '馃悐 Cocodrilo',    
      cat: '馃悎 Gato',      
      centaur: '馃悙 Centauro',
      chicken: '馃悡 Pollo',
      cow: '馃悇 Vaca', 
      dog: '馃悤 Perro',
      dragon: '馃悏 Drag贸n',
      elephant: '馃悩 Elefante',
      fox: '馃 Zorro',
      giraffe: '馃 Jirafa',
      griffin: '馃 Ave',
      horse: '馃悗 Caballo',
      kambing: '馃悙 Cabra',
      kerbau: '馃悆 B煤falo',
      lion: '馃 Le贸n',
      money: '馃懢 MysticCoins',
      monyet: '馃悞 Mono',
      panda: '馃惣 Panda',
      snake: '馃悕 Serpiente',
      phonix: '馃晩锔� F茅nix',
      rhinoceros: '馃 Rinoceronte',
      wolf: '馃惡 Lobo',
      tiger: '馃悈 Tigre',
      cumi: '馃 Calamar',
      udang: '馃 Camar贸n',
      ikan: '馃悷 Pez',
      fideos: '馃崫 Fideos',
      ramuan: '馃И Ingrediente NOVA',
      knife: '馃敧 Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: '馃К',
      limit: '馃拵',
      exp: '鈿�',
      bank: '馃彟',
      diamond: '馃拵+',
      health: '鉂わ笍',
      kyubi: '馃寑',
      joincount: '馃獧',
      emerald: '馃挌',
      stamina: '鉁�',
      role: '馃挭',
      premium: '馃師锔�',
      pointxp: '馃摟',
      gold: '馃憫',
      trash: '馃棏',
      crystal: '馃敭',
      intelligence: '馃',
      string: '馃暩锔�',
      keygold: '馃攽',
      keyiron: '馃棟锔�',
      emas: '馃獏',
      fishingrod: '馃帲',
      gems: '馃崁',
      magicwand: '鈿曪笍',
      mana: '馃獎',
      agility: '馃じ鈥嶁檪锔�',
      darkcrystal: '鈾狅笍',
      iron: '鉀擄笍',
      rock: '馃',
      potion: '馃イ',
      superior: '馃捈',
      robo: '馃殧',
      upgrader: '馃О',
      wood: '馃',
      strength: '馃鈥� 鈾�锔�',
      arc: '馃徆',
      armor: '馃ゼ',
      bow: '馃徆',
      pickaxe: '鉀忥笍',
      sword: '鈿旓笍',
      common: '馃摝',
      uncoommon: '馃ァ',
      mythic: '馃棾锔�',
      legendary: '馃巵',
      petFood: '馃崠',
      pet: '馃嵄',
      bibitanggur: '馃崌',
      bibitapel: '馃崕',
      bibitjeruk: '馃崐',
      bibitmangga: '馃キ',
      bibitpisang: '馃崒',
      ayam: '馃悡',
      babi: '馃悥',
      Jabali: '馃悧',
      bull: '馃悆',    
      buaya: '馃悐',    
      cat: '馃悎',      
      centaur: '馃悙',
      chicken: '馃悡',
      cow: '馃悇', 
      dog: '馃悤',
      dragon: '馃悏',
      elephant: '馃悩',
      fox: '馃',
      giraffe: '馃',
      griffin: '馃', 
      horse: '馃悗',
      kambing: '馃悙',
      kerbau: '馃悆',
      lion: '馃',
      money: '馃懢',
      monyet: '馃悞',
      panda: '馃惣',
      snake: '馃悕',
      phonix: '馃晩锔�',
      rhinoceros: '馃',
      wolf: '馃惡',
      tiger: '馃悈',
      cumi: '馃',
      udang: '馃',
      ikan: '馃悷',
      fideos: '馃崫',
      ramuan: '馃И',
      knife: '馃敧'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: '鈿� Experiencia',
      limit: '馃拵 Diamante',
      diamond: '馃拵 Diamante',
      joincount: '馃獧 Token',
      emerald: '馃挌 Esmeralda',
      berlian: '鈾︼笍 Joya',
      kyubi: '馃寑 Magia',
      gold: '馃憫 Oro',
      money: '馃懢 MysticCoins',
      tiketcoin: '馃帿 mystic Tickers',
      stamina: '鉁� Energ铆a',
      potion: '馃イ Poci贸n',
      aqua: '馃挧 Agua',
      trash: '馃棏 Basura',
      wood: '馃 Madera',
      rock: '馃 Roca',
      batu: '馃 Piedra',
      string: '馃暩锔� Cuerda',
      iron: '鉀擄笍 Hierro',
      coal: '鈿憋笍 Carb贸n',
      botol: '馃嵍 Botella',
      kaleng: '馃カ Lata',
      kardus: '馃 Cart贸n',
      eleksirb: '馃挕 Electricidad',
      emasbatang: '銆斤笍 Barra de Oro',
      emasbiasa: '馃Л Oro Com煤n',
      rubah: '馃馃尗锔� Zorro Grande',
      sampah: '馃棏馃尗锔� Super Basura',
      serigala: '馃惡馃尗锔� Super Lobo',
      kayu: '馃浄 Super Madera',
      sword: '鈿旓笍 Espada',
      umpan: '馃 Carnada', 
      healtmonster: '馃挼 Billetes',
      emas: '馃獏 Pi帽ata',
      pancingan: '馃獫 Gancho',
      pancing: '馃帲 Ca帽a de Pescar',
      common: '馃摝 Caja Com煤n',
      uncoommon: '馃ァ Caja Poco Com煤n',
      mythic: '馃棾锔� Caja M铆tica',
      pet: '馃摣 Caja de Mascotas',//?
      gardenboxs: '馃拹 Caja de Jardiner铆a',//?
      legendary: '馃巵 Caja Legendaria',
      anggur: '馃崌 Uva',
      apel: '馃崕 Manzana',
      jeruk: '馃崐 Naranja',
      mangga: '馃キ Mango',
      pisang: '馃崒 Platano',
      bibitanggur: '馃尵馃崌 Semillas de uva',
      bibitapel: '馃尵馃崕 Semillas de manzana',
      bibitjeruk: '馃尵馃崐 Semillas de naranja',
      bibitmangga: '馃尵馃キ Semillas de Mango',
      bibitpisang: '馃尵馃崒 Semillas de pl谩tano',
      centaur: '馃悙 Centauro',
      griffin: '馃 Ave',
      kucing: '馃悎 Gato',
      naga: '馃悏 Drag贸n',
      fox: '馃 Zorro',
      kuda: '馃悗 Caballo',
      phonix: '馃晩锔� F茅nix',
      wolf: '馃惡 Lobo',
      anjing: '馃惗 Perro',
      petFood: '馃崠 Alimento para Mascota', //?
      makanancentaur: '馃悙馃ォ Comida de Centauro',
      makanangriffin: '馃馃ォ Comida de Ave',
      makanankyubi: '馃寑馃ォ Comida M谩gica',
      makanannaga: '馃悏馃ォ Comida de Drag贸n',
      makananpet: '馃嵄馃ォ Alimentos de mascotas',
      makananphonix: '馃晩锔忦煡� Comida de F茅nix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '鈿�',
      limit: '馃拵',
      diamond: '馃拵+',
      joincount: '馃獧',
      emerald: '馃挌',
      berlian: '鈾︼笍',
      kyubi: '馃寑',
      gold: '馃憫',
      money: '馃懢',
      tiketcoin: '馃帿',
      stamina: '鉁�',
      potion: '馃イ',
      aqua: '馃挧',
      trash: '馃棏',
      wood: '馃',
      rock: '馃',
      batu: '馃',
      string: '馃暩锔�',
      iron: '鉀擄笍',
      coal: '鈿憋笍',
      botol: '馃嵍',
      kaleng: '馃カ',
      kardus: '馃',
      eleksirb: '馃挕',
      emasbatang: '銆斤笍',
      emasbiasa: '馃Л',
      rubah: '馃馃尗锔�',
      sampah: '馃棏馃尗锔�',
      serigala: '馃惡馃尗锔�',
      kayu: '馃浄',
      sword: '鈿旓笍',
      umpan: '馃', 
      healtmonster: '馃挼',
      emas: '馃獏',
      pancingan: '馃獫',
      pancing: '馃帲',
      common: '馃摝',
      uncoommon: '馃ァ',
      mythic: '馃棾锔�',
      pet: '馃摣',//?
      gardenboxs: '馃拹',//?
      legendary: '馃巵',
      anggur: '馃崌',
      apel: '馃崕',
      jeruk: '馃崐',
      mangga: '馃キ',
      pisang: '馃崒',
      bibitanggur: '馃尵馃崌',
      bibitapel: '馃尵馃崕',
      bibitjeruk: '馃尵馃崐',
      bibitmangga: '馃尵馃キ',
      bibitpisang: '馃尵馃崒',
      centaur: '馃悙',
      griffin: '馃',
      kucing: '馃悎',
      naga: '馃悏',
      fox: '馃',
      kuda: '馃悗',
      phonix: '馃晩锔�',
      wolf: '馃惡',
      anjing: '馃惗',
      petFood: '馃崠', //?
      makanancentaur: '馃悙馃ォ',
      makanangriffin: '馃馃ォ',
      makanankyubi: '馃寑馃ォ',
      makanannaga: '馃悏馃ォ',
      makananpet: '馃嵄馃ォ',
      makananphonix: '馃晩锔忦煡�'  
    }
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}	
	
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.a帽o = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `鈻� ${dia} ${fecha}\n鈻� 饾殐饾殤饾殠 饾櫦饾殺饾殰饾殱饾殥饾殞 - 饾櫛饾殬饾殱`
global.gt = '鈽匩etFree Mx - Bot鈽�'
global.mysticbot = '鈽匩etFre Mx - Bot鈽�'
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.waitt = '*[鉂梋 茋岽�蕗散岽�纱岽呩磸, 岽�散岽溼磤蕗岽呩磭 岽溕� 岽嶀磸岽嶀磭纱岽涐磸...*'
global.waittt = '*[鉂梋 茋岽�蕗散岽�纱岽呩磸, 岽�散岽溼磤蕗岽呩磭 岽溕� 岽嶀磸岽嶀磭纱岽涐磸...*'
global.waitttt = '*[鉂梋 茋岽�蕗散岽�纱岽呩磸, 岽�散岽溼磤蕗岽呩磭 岽溕� 岽嶀磸岽嶀磭纱岽涐磸...*'
global.nomorown = '17059900962'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '鉂栤�撯�撯�撯�撯�撯�撱��'
global.cmenub = '鈹娾湨 '
global.cmenuf = '鈺扳攣鈺愨攨鈺愨攣鈥撯�撯�撯�撯�撯�撪箲\n'
global.cmenua = '\n鈱� 鉂欌潣鉂欌潤鉂樷潤鉂氣潤鉂樷潤鉂欌潥鉂欌潣鉂欌潣鉂欌潥鉂欌潣鉂欌潤鉂氣潤鉂樷潤鉂欌潣鉂欌潥鉂欌潣 鈱昞n     '
global.dmenut = '*鉂栤攢鈹呪攢鈹�鈹呪尒*'
global.dmenub = '*鈹娐�*'
global.dmenub2 = '*鈹�*'
global.dmenuf = '*鈺扳攨鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹呪湨*'
global.htjava = '猥光'
global.htki = '*猸戔�⑻┨┩欌姳鈥⑩�⑩�⑩�� 鈽�*'
global.htka = '*鈽� 鈥⑩�⑩�⑩�⑻┨┩欌姲鈥⑩瓚*'
global.comienzo = '鈥� 鈥� 鈼曗棔鈺愨晲鈺愨晲'
global.fin = '鈺愨晲鈺愨晲鈼曗棔 鈥� 鈥�'
global.botdate = `猥光 Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `饾棫 饾棞 饾棤 饾棙 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
